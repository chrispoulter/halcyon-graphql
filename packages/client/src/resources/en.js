export const en = {
    api: {
        codes: {
            USER_REGISTERED: 'User successfully registered.',
            FORGOT_PASSWORD:
                'Instructions as to how to reset your password have been sent to you via email.',
            PASSWORD_RESET: 'Your password has been reset.',
            PROFILE_UPDATED: 'Your profile has been updated.',
            PASSWORD_CHANGED: 'Your password has been changed.',
            ACCOUNT_DELETED: 'Your account has been deleted.',
            ENVIRONMENT_SEEDED: 'Environment seeded.',
            USER_CREATED: 'User successfully created.',
            USER_UPDATED: 'User successfully updated.',
            USER_LOCKED: 'User successfully locked.',
            USER_UNLOCKED: 'User successfully unlocked.',
            USER_DELETED: 'User successfully DELETED.',
            DUPLICATE_USER: 'User name "{{emailAddress}}" is already taken.',
            INVALID_TOKEN: 'Invalid token.',
            USER_NOT_FOUND: 'User not found.',
            INCORRECT_PASSWORD: 'Incorrect password.',
            CREDENTIALS_INVALID: 'The credentials provided were invalid.',
            USER_LOCKED_OUT:
                'This account has been locked out, please try again later.',
            LOCK_CURRENT_USER: 'Cannot lock currently logged in user.',
            DELETE_CURRENT_USER: 'Cannot delete currently logged in user.',
            UNKNOWN_ERROR:
                'An unknown error has occurred whilst communicating with the server.'
        },
        userRoles: {
            SYSTEM_ADMINISTRATOR: 'System Administrator',
            USER_ADMINISTRATOR: 'User Administrator'
        },
        userSortExpressions: {
            NAME_ASC: 'Name A-Z',
            NAME_DESC: 'Name Z-A',
            EMAIL_ADDRESS_ASC: 'Email Address A-Z',
            EMAIL_ADDRESS_DESC: 'Email Address Z-A'
        }
    },
    languages: {
        en: 'EN',
        zh: '簡'
    },
    validation: {
        required: '${label} is a required field.',
        email: '${label} must be a valid email.',
        max: '${label} must be at most ${max} characters.',
        min: '${label} must be at least ${min} characters.',
        fieldsDoNotMatch: 'The "{{label}}" field does not match.'
    },
    components: {
        header: {
            brand: 'Halcyon',
            nav: {
                users: 'Users',
                myAccount: 'My Account',
                logout: 'Logout',
                login: 'Login',
                register: 'Register'
            }
        },
        pager: {
            next: 'Next',
            previous: 'Previous'
        },
        dateInput: {
            day: 'Day...',
            month: 'Month...',
            year: 'Year...',
            monthNames: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        },
        accessDenied: {
            title: 'Access Denied',
            lead: 'Sorry, you do not have access to this resource.',
            homeButton: 'Home'
        },
        privateRoute: {
            title: 'Access Denied'
        },
        publicRoute: {
            baseTitle: 'Halcyon',
            seperator: '//'
        }
    },
    pages: {
        home: {
            jumbotron: {
                title: 'Welcome!',
                lead:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
                registerButton: 'Get Started'
            },
            panel: {
                title: 'Fusce condimentum',
                text:
                    'In vel tincidunt elit, id pretium massa. Nullam rhoncus orci nisl. Pellentesque in mi et eros porttitor sagittis quis at justo. Sed ac faucibus enim, at tempus enim. Nunc gravida accumsan diam ut maximus. Ut sed tellus odio. N am semper blandit pretium. Suspendisse vitae elit turpis.'
            }
        },
        notFound: {
            jumbotron: {
                title: 'Page Not Found',
                lead:
                    'Sorry, the Page you were looking for could not be found.',
                homeButton: 'Home'
            }
        },
        register: {
            meta: { title: 'Register' },
            title: 'Register',
            form: {
                emailAddress: 'Email Address',
                password: 'Password',
                confirmPassword: 'Confirm Password',
                firstName: 'First Name',
                lastName: 'Last Name',
                dateOfBirth: 'Date Of Birth'
            },
            submitButton: 'Submit',
            loginPrompt: 'Already have an account?',
            loginLink: 'Log in now'
        },
        login: {
            meta: { title: 'Login' },
            title: 'Login',
            form: {
                emailAddress: 'Email Address',
                password: 'Password',
                rememberMe: 'Remember my password on this computer'
            },
            submitButton: 'Submit',
            registerPrompt: 'Not already a member?',
            registerLink: 'Register now',
            forgotPasswordPrompt: 'Forgotten your password?',
            forgotPasswordLink: 'Request reset'
        },
        forgotPassword: {
            meta: { title: 'Forgot Password' },
            title: 'Forgotten Password',
            form: {
                emailAddress: 'Email Address'
            },
            submitButton: 'Submit'
        },
        resetPassword: {
            meta: { title: 'Reset Password' },
            title: 'Reset Password',
            form: {
                emailAddress: 'Email Address',
                newPassword: 'New Password',
                confirmNewPassword: 'Confirm New Password'
            },
            submitButton: 'Submit'
        },
        myAccount: {
            meta: { title: 'My Account' },
            title: 'My Account',
            profilenotFound: 'Profile could not be found.',
            profileSection: {
                title: 'Profile',
                updateButton: 'Update',
                emailAddress: 'Email Address',
                password: 'Password',
                changePasswordLink: 'Change your password...',
                name: 'Name',
                dateOfBirth: 'Date Of Birth'
            },
            settingsSection: {
                title: 'Settings',
                deletePrompt:
                    'Once you delete your account all of your data and settings will be removed. Please be certain.',
                deleteButton: 'Delete Account'
            },
            deleteModal: {
                title: 'Confirm',
                message: 'Are you sure you want to delete your account?',
                confirm: 'Ok',
                cancel: 'Cancel'
            }
        },
        updateProfile: {
            meta: { title: 'Update Profile' },
            title: 'Update Profile',
            profilenotFound: 'Profile could not be found.',
            form: {
                emailAddress: 'Email Address',
                firstName: 'First Name',
                lastName: 'Last Name',
                dateOfBirth: 'Date Of Birth'
            },
            cancelButton: 'Cancel',
            submitButton: 'Submit'
        },
        changePassword: {
            meta: { title: 'Change Password' },
            title: 'Change Password',
            form: {
                currentPassword: 'Current Password',
                newPassword: 'New Password',
                confirmNewPassword: 'Confirm New Password'
            },
            cancelButton: 'Cancel',
            submitButton: 'Submit',
            forgotPasswordPrompt: 'Forgotten your password?',
            forgotPasswordLink: 'Request reset'
        },
        user: {
            meta: { title: 'Users' },
            title: 'Users',
            createNewButton: 'Create New',
            usersnotFound: 'No users could be found.',
            form: {
                searchPlaceholder: 'Search...',
                searchButton: 'Search',
                sortByButton: 'Sort By'
            },
            lockedBadge: 'Locked'
        },
        createUser: {
            meta: { title: 'Create User' },
            title: 'User',
            subtitle: 'Create',
            form: {
                emailAddress: 'Email Address',
                password: 'Password',
                confirmPassword: 'Confirm Password',
                firstName: 'First Name',
                lastName: 'Last Name',
                dateOfBirth: 'Date Of Birth',
                roles: 'Roles'
            },
            cancelButton: 'Cancel',
            submitButton: 'Submit'
        },
        updateUser: {
            meta: { title: 'Update User' },
            title: 'User',
            subtitle: 'Update',
            usernotFound: 'User could not be found.',
            form: {
                emailAddress: 'Email Address',
                firstName: 'First Name',
                lastName: 'Last Name',
                dateOfBirth: 'Date Of Birth',
                roles: 'Roles'
            },
            lockModal: {
                title: 'Confirm',
                message:
                    'Are you sure you want to lock <strong>{{firstName}} {{lastName}}</strong>?',
                confirm: 'Ok',
                cancel: 'Cancel'
            },
            unlockModal: {
                title: 'Confirm',
                message:
                    'Are you sure you want to unlock <strong>{{firstName}} {{lastName}}</strong>?',
                confirm: 'Ok',
                cancel: 'Cancel'
            },
            deleteModal: {
                title: 'Confirm',
                message:
                    'Are you sure you want to delete <strong>{{firstName}} {{lastName}}</strong>?',
                confirm: 'Ok',
                cancel: 'Cancel'
            },
            cancelButton: 'Cancel',
            lockButton: 'Lock',
            unlockButton: 'Unlock',
            deleteButton: 'Delete',
            submitButton: 'Submit'
        }
    }
};
