import React from 'react';

import { Container, Typography } from 'shared';
import { CopyBtn, ImageUploaded, Input, Link, Tick } from './Uploaded.elements';


export const Uploaded = () => {
    return (
        <Container>
            <Tick />

            <Typography as="h2">
                Uploaded Successfully!
            </Typography>

            <ImageUploaded />

            <Link>
                <Input />
                <CopyBtn>
                    Copy Link
                </CopyBtn>
            </Link>
        </Container>
    )
}
