import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/themes';
import { Uploader } from 'App/Uploader/Uploader';
import { Uploading } from 'App/Uploading/Uploading';
// import { Uploaded } from 'App/Uploaded/Uploaded';

export const App = () => {
    
    const [ uploading, setUploading ] = useState( false );
    const [ image, setImage ] = useState( null );

    return (
        <ThemeProvider theme={ theme }>
            {
                ( !uploading ) &&
                    <Uploader
                        setUploading={ setUploading }
                        image={ image }
                        setImage={ setImage }
                    />
            }

            {
                ( uploading ) &&
                    <Uploading image={ image } />
            }

            {/* <Uploaded /> */}
        </ThemeProvider>
    )
}
