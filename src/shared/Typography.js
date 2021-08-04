import styled from 'styled-components';

export const Typography = styled.p`
    font-size: ${ ( { fz, theme } ) => fz || theme.fz[ '400' ] };
    font-weight: ${ ( { fw } ) => fw || '500' };
    color: ${ ( { color, theme } ) => color || theme.colors.dark };
    text-align:  ${ ( { align } ) => align || 'center' };
`;