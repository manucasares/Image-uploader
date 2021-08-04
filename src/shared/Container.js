import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-gap: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(75%, 600px);
    background: #fff;
    padding: 2rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;