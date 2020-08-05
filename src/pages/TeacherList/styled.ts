import styled from 'styled-components';

export const TeacherContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
`;

export const SearchTeachers = styled.div`
    margin-top: 3.2rem;
    padding: 0 1.6rem;

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

export const InputBlock = styled.div`
    position: relative;
    margin-top: 1.6rem;

    :first-child {
        margin-top: 0;   
    }

    :focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }

    > label {
        font-size: 1.4rem;
        color: var(--color-text-in-primary);
    }

    > input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-in-line-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
    }

    @media (min-width: 700px) {
        margin-top: 0;
    }
`;

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;
`;
