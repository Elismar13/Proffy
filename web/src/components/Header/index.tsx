import React from 'react';

import { PageTeacherList, Header, TopBar, BackLink, Logo, HeaderContent, HeaderText, TextDescription } from './styled';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
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
                { props.description && 
                    <TextDescription>
                        {props.description}
                    </TextDescription> 
                }
                { props.children }                 
            </HeaderContent>
        </Header>
    );
}

export default PageHeader;