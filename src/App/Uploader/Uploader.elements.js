import styled from 'styled-components';
import { Container, Typography } from 'shared/';

export const UploaderContainer = styled( Container )`
    display: grid;
    grid-gap: 2rem;
`;

export const Dropzone = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    background: ${ ( { theme } ) => theme.colors.soft_light_blue };
    border-radius: 10px;
    border: 2px dashed ${ ( { isDragActive, theme } ) => isDragActive ? theme.colors.green : theme.colors.light_blue };
    padding: 2.8rem 1.4rem;
    transition: border .3s ease;
`;

export const DragDropText = styled( Typography )`
    color: ${ ( { isDragActive, theme } ) => isDragActive ? theme.colors.dark : theme.colors.light_gray };
    transition: color .3s ease;
`;

export const InputFile = styled.input.attrs( props => ({
    type: 'file'
}) )`
    display: none;
`
