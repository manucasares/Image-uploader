import React from 'react';

import {
    ChooseFileBtn,
    Dropdown,
    Image } from './Uploader.elements';
import { Container, Typography } from 'shared';
import { theme } from 'styles/themes';

export const Uploader = () => {
    return (
        <Container> 
            <Typography as="h2">
                Upload your image
            </Typography>

            <Typography
                fz={ theme.fz[ '300' ] }
                color={ theme.colors.gray }
            >
                File should be Jpeg, Png...
            </Typography>

            <Dropdown>
                <Image
                    src="images/image.svg"
                    alt="Mountain with clouds drawing"
                />

                <Typography
                    fz={ theme.fz[ '300' ] }
                    color={ theme.colors.light_gray }
                >
                    Drag & Drop your image here
                </Typography>
            </Dropdown>

            <Typography
                fz={ theme.fz[ '300' ] }
                color={ theme.colors.light_gray }
            >
                Or
            </Typography>

            <ChooseFileBtn>
                Choose a file
            </ChooseFileBtn>
        </Container>
    )
}
