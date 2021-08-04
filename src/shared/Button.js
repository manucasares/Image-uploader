import styled from 'styled-components';

export const PrimaryBtn = styled.button`
    display: block;
    background: ${ ( { theme } ) => theme.colors.blue };
    color: white;
    border-radius: 7px;
    border: none;
    padding: .8rem 1rem;
    margin: 0 auto;
    cursor: pointer;
    transition: background .3s ease;

    &:hover {
        background: ${ ( { theme } ) => theme.colors.dark_blue };
    }
`;