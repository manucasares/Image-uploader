import styled from 'styled-components';
import { Container } from 'shared/';

export const UploaderContainer = styled( Container )`
    display: grid;
    grid-gap: 2rem;
`;

export const Dropdown = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    background: ${ ( { theme } ) => theme.colors.soft_light_blue };
    border-radius: 10px;
    border: 2px dashed ${ ( { theme } ) => theme.colors.light_blue };
    padding: 2.8rem 1.4rem;
`;
