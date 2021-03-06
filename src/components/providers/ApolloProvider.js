import React, { useContext } from 'react';
import { ApolloProvider as BaseApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from './AuthProvider';
import { captureGraphQLError } from '../../utils/logger';
import { config } from '../../utils/config';

export const ApolloProvider = ({ children }) => {
    const { t } = useTranslation();

    const { accessToken, removeToken } = useContext(AuthContext);

    const client = new ApolloClient({
        uri: config.GRAPHQL_URL,
        resolvers: {},
        request: operation =>
            operation.setContext({
                headers: {
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                    'x-transaction-id': uuidv4()
                }
            }),
        onError: error => {
            if (error.graphQLErrors) {
                for (const graphQLError of error.graphQLErrors) {
                    switch (graphQLError.extensions?.code) {
                        case 'UNAUTHENTICATED':
                            removeToken();
                            break;

                        case 'FORBIDDEN':
                            toast.warn(
                                t(
                                    `api.codes.${graphQLError.extensions?.code}`,
                                    error.operation.variables
                                )
                            );
                            break;

                        default:
                            toast.error(
                                t(
                                    [
                                        `api.codes.${graphQLError.extensions?.code}`,
                                        'api.codes.INTERNAL_SERVER_ERROR'
                                    ],
                                    error.operation.variables
                                )
                            );
                            break;
                    }
                }
            } else if (error.networkError) {
                toast.error(
                    t(
                        'api.codes.INTERNAL_SERVER_ERROR',
                        error.operation.variables
                    )
                );
            }

            captureGraphQLError(error);
        }
    });

    return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};
