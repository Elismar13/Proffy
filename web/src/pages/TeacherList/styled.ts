import styled from 'styled-components';

export const TeacherContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
`;

export const SearchTeachers = styled.form`
    margin-top: 3.2rem;
    padding: 0 1.6rem;

    > button {
        width: 100%;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;
        
        :hover {
            background: var(--color-secundary-dark);
        }
        @media(min-width: 700px) {
            width: 20rem;
        }
    }

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

export const Main = styled.main`
    margin: 3.2rem auto;
    max-width: 700px;
    width: 90%;
`;
