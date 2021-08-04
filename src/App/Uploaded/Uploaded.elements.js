import styled from 'styled-components';
import { PrimaryBtn } from 'shared';

export const Tick = styled.i.attrs( () => ({
    className: "fas fa-check-circle"
}) )`
    font-size: ${ ( { theme } ) => theme.fz[ '700' ] };
    color: ${ ( { theme } ) => theme.colors.green };
    margin: 0 auto;
`;

export const ImageUploaded = styled.section`
    background: url( 'https://cdn2.salud180.com/sites/default/files/styles/medium/public/coffeeofficenote_0.jpg' )
                no-repeat center center / cover;
    height: 15rem;
    border-radius: 15px;
`;

export const Link = styled.div`
    position: relative;
`;

export const Input = styled.input.attrs( props => ({
    value: 'https://cdn2.salud180.com/sites/default/files/styles/medium/public/coffeeofficenote_0.jpg',
    disabled: true
}) )`
    width: 100%;
    padding: .9rem 1rem;
    border-radius: 15px;
    background: ${ ( { theme } ) => theme.colors.soft_light_blue };
    border: 1px solid ${ ( { theme } ) => theme.colors.soft_gray };
    color: ${ ( { theme } ) => theme.colors.dark };
    font-size: ${ ( { theme } ) => theme.fz[ '200' ] };
    outline: none;
`;

export const CopyBtn = styled( PrimaryBtn )`
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 2px;
    padding: 0 1rem;
    border-radius: 3px 15px 15px 3px;
`