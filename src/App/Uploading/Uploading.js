import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import { theme } from 'styles/themes';
import { Container, Typography } from 'shared';
import { Bar, UploadingBar } from './Uploading.elements';


const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dalpbowt0/image/upload';

export const Uploading = ( { image, setSectionShown, setImageUrl, setError, setImage } ) => {

    const barRef = useRef();
    const [ progressPercentage, setProgressPercentage ] = useState( 0 );

    useEffect(() => {
        
        const uploadImage = async() => {
            
            const formData = new FormData();

            formData.append( 'file', image );
            formData.append( 'upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET );

            const res = await axios.post( CLOUDINARY_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ( progress ) => {
                   
                    const { loaded, total } = progress;

                    const progressPercentage = ( loaded * 100 ) / total;
                    setProgressPercentage( progressPercentage );
                },
            } );

            // Error al uploadear
            if ( ( res.statusText !== 'OK' ) ) {
                setImage( null );
                setError( 'There was a mistake uploading your image...' );
                setSectionShown( 'uploader' );
                return;
            }
            
            setError( '' );
            setSectionShown( 'uploaded' );
            setImageUrl( res.data.secure_url );
        }

        uploadImage();

    }, [ image, setImageUrl, setSectionShown, setError, setImage ] );

    return (
        <Container>
            <Typography
                align="left"
                fz={ theme.fz[ '300' ] }
            >
                Uploading...
            </Typography>

            <UploadingBar>
                <Bar
                    ref={ barRef }
                    width={ progressPercentage + '%' }
                />
            </UploadingBar>
        </Container>
    )
}
