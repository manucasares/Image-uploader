import React, { useRef } from 'react';

import { theme } from 'styles/themes';
import { Container, Typography } from 'shared';
import { Bar, UploadingBar } from './Uploading.elements';

export const Uploading = () => {

    const barRef = useRef();

    return (
        <Container>
            <Typography
                align="left"
                fz={ theme.fz[ '300' ] }
            >
                Uploading...
            </Typography>

            <UploadingBar>
                <Bar ref={ barRef } />
            </UploadingBar>

        </Container>
    )
}
