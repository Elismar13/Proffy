import React from 'react';
import { PageTeacherList, Header, TopBar, BackLink, Logo, HeaderContent, HeaderText } from './styled';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const TeacherForm: React.FC = () => {
    return (
        <PageTeacherList>
            <Header>
                <TopBar>
                    <BackLink to="/" >
                        <img src={backIcon}  alt="Voltar" />
                    </BackLink>
                    <Logo src={logoImg} alt="Logo"/>
                </TopBar>

                <HeaderContent>
                    <HeaderText>
                      Estes sao os profits disponíveis.
                    </HeaderText>                    
                </HeaderContent>
            </Header>
        </PageTeacherList>
    );
}

export default TeacherForm;