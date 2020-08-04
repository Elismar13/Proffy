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
    LogoImg,
    LogoText,
    HeroImage,
    ButtonsContainer,
    Study,
    StudyIcon,
    GiveClases,
    TotalConnections,
    PurpleHeart
    } from './styled';


const Landing: React.FC = () => {
    return (
        <PageContainer>
            <PageLandingContent>
                <LogoContainer>
                    <LogoImg src={logoImg} alt="Proffy"/>
                    <LogoText>Sua plataforma de estudos online</LogoText>
                </LogoContainer>

                <HeroImage src={landingImg} alt="Plataforma de estudos"/>

                <ButtonsContainer>
                    <Study>
                        <StudyIcon src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Study>
                    <GiveClases>
                        <StudyIcon src={giveClassification} alt="Dar aulas"/>
                        Dar aulas
                    </GiveClases>
                </ButtonsContainer>

                <TotalConnections>
                    Total de 200 conexões realizadas 
                    <PurpleHeart src={purpleHeart} alt="Coração Roxo"/> 
                </TotalConnections>
            </PageLandingContent>
        </PageContainer>
    );
}

export default Landing;