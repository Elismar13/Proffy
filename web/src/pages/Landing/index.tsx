import React, { useState, useEffect } from 'react';

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
import api from '../../services/api';


const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, [])

    return (
        <PageContainer>
            <PageLandingContent>
                <LogoContainer>
                    <LogoImg src={logoImg} alt="Proffy"/>
                    <LogoText>Sua plataforma de estudos online</LogoText>
                </LogoContainer>

                <HeroImage src={landingImg} alt="Plataforma de estudos"/>

                <ButtonsContainer>
                    <Study to="/study">
                        <StudyIcon src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Study>
                    <GiveClases to="/give-classes">
                        <StudyIcon src={giveClassification} alt="Dar aulas"/>
                        Dar aulas
                    </GiveClases>
                </ButtonsContainer>

                <TotalConnections>
                    Total de {totalConnections} conexões realizadas 
                    <PurpleHeart src={purpleHeart} alt="Coração Roxo"/> 
                </TotalConnections>
            </PageLandingContent>
        </PageContainer>
    );
}

export default Landing;