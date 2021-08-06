import React, { useState } from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store/store';
import { theme } from 'styles/themes';
import { Uploader } from 'App/Uploader/Uploader';
import { Uploading } from 'App/Uploading/Uploading';
// import { Uploaded } from 'App/Uploaded/Uploaded';

export const App = () => {
    
    const [ uploading, setUploading ] = useState( false );

    return (
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>

                {
                    ( !uploading ) &&
                        <Uploader
                            setUploading={ setUploading }
                        />
                }

                {
                    ( uploading ) &&
                        <Uploading />
                }

                {/* <Uploaded /> */}
            </Provider>
        </ThemeProvider>
    )
}
