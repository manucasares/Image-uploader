import React, { useEffect, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone'

import { DragDropText, Dropzone, InputFile } from './Uploader.elements';
import { Container, Image, Typography, PrimaryBtn } from 'shared';
import { theme } from 'styles/themes';

const validExtensions = [ 'jpeg', 'jpg', 'png', 'svg' ];

export const Uploader = ( { setUploading, image, setImage } ) => {

    const inputFileRef = useRef();
    
    const onDrop = useCallback( acceptedFiles => {
        // Se ejecutará cuando se dejen caer archivos
        setImage( acceptedFiles[ 0 ] );
    }, [ setImage ] );

    const handleInputFile = ( e ) => {
        // Se ejecutará cuando se seleccionen imagenes
        setImage( e.target.files[ 0 ] );
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } );

    useEffect(() => {
        
        if ( !image ) return;

        // Verificamos que las extensiones sean válidas
        const splitted = image.name.split( '.' );
        const extension = splitted[ splitted.length - 1 ];

        if ( !validExtensions.includes( extension ) ) {
            // TODO: alerta de extension inválida
            console.log('invalid extension')
            return;
        }

        setUploading( true );

    }, [ image, setUploading ] );

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

            <Dropzone
                { ...getRootProps() }
                isDragActive={ isDragActive }
            >
                <input { ...getInputProps() } />
                <Image
                    src="images/image.svg"
                    alt="Mountain with clouds drawing"
                    size="35%"
                />

                <DragDropText
                    fz={ theme.fz[ '300' ] }
                    color={ theme.colors.light_gray }
                    isDragActive={ isDragActive }
                >
                    Drag & Drop your image here
                </DragDropText>
            </Dropzone>

            <Typography
                fz={ theme.fz[ '300' ] }
                color={ theme.colors.light_gray }
            >
                Or
            </Typography>

            <InputFile
                ref={ inputFileRef }
                onChange={ handleInputFile }
            />

            <PrimaryBtn
                onClick={ () => inputFileRef.current.click() }
            >
                Choose a file
            </PrimaryBtn>
        </Container>
    )
}
