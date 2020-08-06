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

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;
`;
