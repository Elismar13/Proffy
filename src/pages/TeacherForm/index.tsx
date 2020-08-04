import React from 'react';
import { Container } from '../../globalStyled';
import { Header, TopBar, BackLink, Logo, HeaderContent, HeaderText } from './styled';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const TeacherForm: React.FC = () => {
    return (
        <Container>
            <Header>
                <TopBar>
                    <BackLink to="/" >
                        <img src={logoImg}  alt="Voltar" />
                    </BackLink>
                    <Logo src={backIcon} alt="Logo"/>
                </TopBar>

                <HeaderContent>
                    <HeaderText>
                      Estes sao os profits disponíveis.
                    </HeaderText>                    
                </HeaderContent>
            </Header>
        </Container>
    );
}

export default TeacherForm;