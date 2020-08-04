import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTeacherList = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const Header = styled.div`
    display: flex;

    flex-direction: column;
    background-color: var(--color-primary);
`;

export const TopBar = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    align-items: center;
    color: var(--color-in-text-primary);
    padding: 1.6rem 0;
`;

export const BackLink = styled(Link)`
    height: 3.2rem;
    transition: opacity 0.2;

    :hover {
        opacity: 0.6;
    }
`;

export const Logo = styled.img`
    height: 1.6rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
`;

export const HeaderText = styled.strong`
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
`;
