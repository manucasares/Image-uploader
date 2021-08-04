import React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store/store';
import { theme } from 'styles/themes';
import { Uploader } from 'App/Uploader/Uploader';
// import { Uploading } from 'App/Uploading/Uploading';


export const App = () => {
    
    return (
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>
                <Uploader />
                {/* <Uploading /> */}
            </Provider>
        </ThemeProvider>
    )
}
