import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassification from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import { 
    PageContainer,
    PageLandingContent,
    LogoContainer,
    HeroImage,
    ButtonsContainer,
    Study,
    GiveClases,
    TotalConnections 
    } from './styled';


const Landing: React.FC = () => {
    return (
        <PageContainer>
            <PageLandingContent>
                <LogoContainer>
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </LogoContainer>

                <HeroImage src={landingImg} alt="Plataforma de estudos"/>

                <ButtonsContainer>
                    <Study>
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Study>
                    <GiveClases>
                        <img src={giveClassification} alt="Estudar"/>
                        Estudar
                    </GiveClases>
                </ButtonsContainer>

                <TotalConnections>
                    total de 200 conexões realizadas <img src={purpleHeart} alt="Coração Roxo"/> 
                </TotalConnections>
            </PageLandingContent>
        </PageContainer>
    );
}

export default Landing;