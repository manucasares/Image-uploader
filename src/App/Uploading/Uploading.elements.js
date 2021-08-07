import styled from 'styled-components';

export const UploadingBar = styled.div`
    position: relative;
    background: #f2f2f2;
    border-radius: 30px;
    height: 8px;
`;

export const Bar = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    min-width: 5%;
    width: ${ ( { width } ) => width || '5%' };
    max-width: 100%;
    border-radius: 4px;
    background: ${ ( { theme } ) => theme.colors.blue };
    
`;