import styled from 'styled-components';

export const Image = styled.img.attrs( ( { src, alt } ) => ({
    src,
    alt 
}) )`
    width: ${ ( { size } ) => size || 'auto' };
    ${ ( { align } ) => align === 'center' && 'margin: 0 auto;' };
    color: ${ ( { color } ) => color || 'black' };
`;