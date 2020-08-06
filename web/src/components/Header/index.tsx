import React from 'react';

import { PageTeacherList, Header, TopBar, BackLink, Logo, HeaderContent, HeaderText } from './styled';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
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
                        {props.title}
                    </HeaderText>   
                    {props.children}                 
                </HeaderContent>
            </Header>
        </PageTeacherList>
    );
}

export default PageHeader;