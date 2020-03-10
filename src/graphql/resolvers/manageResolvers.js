const { UserInputError } = require('apollo-server');
const { combineResolvers } = require('graphql-resolvers');
const {
    getUserById,
    getUserByEmailAddress,
    updateUser,
    removeUser
} = require('../../data/userRepository');
const pubsub = require('../pubsub');
const { isAuthenticated } = require('../context');
const { hashPassword, verifyPassword } = require('../../utils/password');

module.exports = {
    Query: {
        getProfile: combineResolvers(
            isAuthenticated,
            async (_, __, { payload }) => getUserById(payload.sub)
        )
    },
    Mutation: {
        updateProfile: combineResolvers(
            isAuthenticated,
            async (_, { input }, { payload }) => {
                const user = await getUserById(payload.sub);
                if (!user) {
                    throw new UserInputError('User not found.');
                }

                if (user.emailAddress !== input.emailAddress) {
                    const existing = await getUserByEmailAddress(
                        input.emailAddress
                    );

                    if (existing) {
                        throw new UserInputError(
                            `User name "${input.emailAddress}" is already taken.`
                        );
                    }
                }

                user.emailAddress = input.emailAddress;
                user.firstName = input.firstName;
                user.lastName = input.lastName;
                user.dateOfBirth = input.dateOfBirth;
                await updateUser(user);

                pubsub.publish('userUpdated', { userUpdated: user });

                return {
                    message: 'Your profile has been updated.',
                    user
                };
            }
        ),
        changePassword: combineResolvers(
            isAuthenticated,
            async (_, { currentPassword, newPassword }, { payload }) => {
                const user = await getUserById(payload.sub);
                if (!user) {
                    throw new UserInputError('User not found.');
                }

                const verified = await verifyPassword(
                    currentPassword,
                    user.password
                );

                if (!verified) {
                    throw new UserInputError('Incorrect password.');
                }

                user.password = await hashPassword(newPassword);
                user.passwordResetToken = undefined;
                await updateUser(user);

                return {
                    message: 'Your password has been changed.',
                    user
                };
            }
        ),
        deleteAccount: combineResolvers(
            isAuthenticated,
            async (_, __, { payload }) => {
                const user = await getUserById(payload.sub);
                if (!user) {
                    throw new UserInputError('User not found.');
                }

                await removeUser(user);

                pubsub.publish('userRemoved', { userRemoved: user });

                return {
                    message: 'Your account has been deleted.'
                };
            }
        )
    }
};
