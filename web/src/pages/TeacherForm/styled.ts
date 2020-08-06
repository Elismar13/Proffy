import styled from 'styled-components';

import { HeaderContent } from '../../components/Header/styled';

export const TeacherFormPage = styled.div`
    width: 100vw;
    height: 100vh;

    ${HeaderContent} {
        margin-bottom: 6.4rem;
    }
`;

export const Main = styled.main`
    background-color: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;
`;

export const FieldSet = styled.fieldset`
    border: 0;
    padding: 0 2.4rem;
    margin-top: 6.4rem;

    :first {
        margin-top: 0;
    }
`;

export const Legend = styled.legend`
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
`;
export const InputBlock = styled.div`

`;