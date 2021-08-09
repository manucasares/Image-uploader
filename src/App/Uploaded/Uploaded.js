import React, { useRef } from 'react';

import { useNotification } from 'hooks/useNotification';
import { Notification, Container, Typography } from 'shared';
import { BackToUploader, CopyBtn, ImageUploaded, Input, Link, Tick } from './Uploaded.elements';


export const Uploaded = ( { imageUrl, setSectionShown, setImage } ) => {

    const inputRef = useRef();
    const [ notificationRef, showNotification, setShowNotification ] = useNotification();    

    const handleCopy = () => {

        // Sacamos disabled para poder hacer el copy
        inputRef.current.disabled = false;

        // Seleccionamos, y copiamos
        inputRef.current.select();
        document.execCommand( 'copy' );

        // Volvemos a poner el disabled
        inputRef.current.disabled = true;

        // Activamos notificación
        setShowNotification( true );
    }

    const backToUploader = (  ) => {
        setSectionShown( 'uploader' );
        setImage( null );
    }

    return (
        <Container>

            <BackToUploader
                onClick={ backToUploader }
            >
                Upload another image!
            </BackToUploader>

            <Tick />

            <Typography as="h2">
                Uploaded Successfully!
            </Typography>

            <ImageUploaded
                imageUrl={ imageUrl }
            />

            <Link>
                <Input
                    imageUrl={ imageUrl }
                    ref={ inputRef }
                />
                <CopyBtn onClick={ handleCopy } >
                    Copy Link
                </CopyBtn>
            </Link>

            { ( showNotification ) &&
                <Notification
                    ref={ notificationRef }
                >
                    Copied to Clipboard!
                </Notification> }

        </Container>
    )
}
