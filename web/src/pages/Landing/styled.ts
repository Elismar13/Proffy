import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
`;

export const LogoContainer = styled.div`
    text-align: center;
`;

export const LogoImg = styled.img`
    height: 10rem;
`;

export const LogoText = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
`;

export const HeroImage = styled.img`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
`;

export const Study = styled(Link)`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2.0rem Archive;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);
    background: var(--color-primary-lighter);
    transition: background-color 0.2s;

    text-decoration: none;

    :hover {
        background: var(--color-primary-light);
    }
`;

export const StudyIcon = styled.img`

`;

export const GiveClases = styled(Link)`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archive;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);
    background: var(--color-secundary);
    transition: background-color 0.2s;

    text-decoration: none;

    :hover {
        background: var(--color-secundary-dark);
    }

`;

export const TotalConnections = styled.span`
    font-size: 1.4rem;
    font-family: Poppins;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PurpleHeart = styled.img`
    margin-left: 0.8rem;
`;

export const PageLandingContent = styled.div`
    @media (min-width: 1100px) {
        max-width: 1100px;

        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
            "logo hero hero"
            "buttons buttons total"
        ;
        ${LogoContainer} {
            grid-area: logo;
            align-self: center;
            margin: 0;
            text-align: left;
        }

        ${LogoText} {
            text-align: initial;
            font-size: 3.6rem;
        }

        ${HeroImage} {
            grid-area: hero;
            justify-self: end;
        }

        ${ButtonsContainer} {
            grid-area: buttons;
            justify-content: flex-start;

            > a {
                font-size: 2.4rem;
            }

            > a img {
                margin-right: 2.4rem;
            }
        }

        ${TotalConnections} {
            grid-area: total;
            justify-self: end;
        }

    }
`;