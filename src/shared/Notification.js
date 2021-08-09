import styled from 'styled-components';

export const Notification = styled.div`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX( -50% );
    padding: .8rem 1.5rem;
    background: ${ ( { theme, bg_color } ) => bg_color || theme.colors.success };
    color: white;
    border-radius: 5px;
    text-align: center;
    opacity: 0;
`;
