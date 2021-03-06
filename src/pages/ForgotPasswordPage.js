import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { FORGOT_PASSWORD } from '../graphql';
import { TextInput, Button } from '../components';
import { trackEvent } from '../utils/logger';

export const ForgotPasswordPage = ({ history }) => {
    const { t } = useTranslation();

    const [forgotPassword] = useMutation(FORGOT_PASSWORD);

    const onSubmit = async variables => {
        try {
            const result = await forgotPassword({ variables });

            toast.success(t(`api.codes.${result.data.forgotPassword.code}`));

            trackEvent('password_reminder');

            history.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Helmet>
                <title>{t('pages.forgotPassword.meta.title')}</title>
            </Helmet>

            <h1>{t('pages.forgotPassword.title')}</h1>
            <hr />

            <Formik
                initialValues={{
                    emailAddress: ''
                }}
                validationSchema={Yup.object().shape({
                    emailAddress: Yup.string()
                        .label(t('pages.forgotPassword.form.emailAddress'))
                        .email()
                        .required()
                })}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form noValidate>
                        <Field
                            name="emailAddress"
                            type="email"
                            label={t('pages.forgotPassword.form.emailAddress')}
                            required
                            maxLength={254}
                            autoComplete="username"
                            component={TextInput}
                        />

                        <FormGroup className="text-right">
                            <Button
                                type="submit"
                                color="primary"
                                loading={isSubmitting}
                            >
                                {t('pages.forgotPassword.submitButton')}
                            </Button>
                        </FormGroup>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};
