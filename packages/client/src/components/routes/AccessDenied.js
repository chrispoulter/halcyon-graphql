import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Jumbotron, Button } from 'reactstrap';

export const AccessDenied = () => {
    const { t } = useTranslation();

    return (
        <Jumbotron>
            <Container>
                <h1 className="display-3">
                    {t('UI:Components:AccessDenied:Title')}
                </h1>
                <hr />
                <p className="lead">{t('UI:Components:AccessDenied:Lead')}</p>
                <p className="text-right">
                    <Button to="/" color="primary" size="lg" tag={Link}>
                        {t('UI:Components:AccessDenied:HomeButton')}
                    </Button>
                </p>
            </Container>
        </Jumbotron>
    );
};
