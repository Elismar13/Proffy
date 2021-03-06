import styled from 'styled-components';

export const TextareaBlock = styled.div`
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
        bottom: 6px;
    }

    > label {
        font-size: 1.4rem;
        color: var(--color-text-in-primary);
    }

    > textarea {
        width: 100%;
        height: 16rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-in-line-white);
        outline: 0;
        resize: vertical;
        min-height: 8rem;
        padding: 1.2 1.6rem;
        font: 1.6rem Archivo;
    }

    @media (min-width: 700px) {
        margin-top: 0;
    }
`;