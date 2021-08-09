import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';

import { useNotification } from 'hooks/useNotification';
import { Uploader } from 'App/Uploader/Uploader';
import { Uploading } from 'App/Uploading/Uploading';
import { Uploaded } from 'App/Uploaded/Uploaded';
import { Notification } from 'shared';
import { theme } from 'styles/themes';

export const App = () => {
    
    const [ notificationRef, showNotification, setShowNotification ] = useNotification();    
    const [ sectionShown, setSectionShown ] = useState( 'uploader' );
    const [ image, setImage ] = useState( null );
    const [ imageUrl, setImageUrl ] = useState( '' );
    const [ error, setError ] = useState( '' );

    useEffect(() => {
        if ( error ) {
            setShowNotification( true );
        }
    }, [ error, setShowNotification ] );

    return (
        <ThemeProvider theme={ theme }>
            { ( sectionShown === 'uploader' ) &&
                <Uploader
                    setSectionShown={ setSectionShown }
                    image={ image }
                    setImage={ setImage }
                    setError={ setError }
                /> }

            { ( sectionShown === 'uploading' ) &&
                <Uploading
                    image={ image }
                    setImage={ setImage }
                    setSectionShown={ setSectionShown }
                    setImageUrl={ setImageUrl }
                    setError={ setError }
                /> }

            { ( sectionShown === 'uploaded' ) &&
                <Uploaded
                    imageUrl={ imageUrl }
                    setSectionShown={ setSectionShown }
                    setImage={ setImage }
                /> }

            { ( showNotification ) &&
                <Notification
                    ref={ notificationRef }
                    bg_color={ theme.colors.error }
                >
                    { error }
                </Notification> }
        </ThemeProvider>
    )
}
