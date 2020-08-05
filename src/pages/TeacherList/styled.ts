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

export const TeacherItem = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    > header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;
    }   
    > header img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }
    > p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }
    > footer {
        padding: 3.2rem 2rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > footer p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
    }
    > footer button {
        width: 20rem;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.2s;
    }
    > footer button:hover {
        background: var(--color-secundary-dark);
    }

    @media (min-width: 700px) {
        > footer p strong {
            display: initial;
            margin-left: 1.6rem;
        }

        > footer button {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }

        > footer button img {
            margin-right: 1.6rem;
        }
    }
`;

export const UserInfo = styled.div`
    margin-left: 2.4rem;
    > strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: var(--color-text-title);
    }

    > span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
    }
`;
