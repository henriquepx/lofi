import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaInfo, FaLinkedin, FaGithub, FaWhatsapp, FaTiktok, FaEnvelope } from 'react-icons/fa';
import GlobalStyles from '../styles/GlobalStyles';
import { BackgroundColorContext } from '../context/BackgroundColorContext';

interface InfoProps {
  isOpen: boolean;
  toggleInfo: () => void;
}

const InfoContainer = styled.div<{ isOpen: boolean; themeColor: string; }>`
  position: absolute;
  width: 35px;
  height: 50px;
  right: ${props => props.isOpen ? '234px' : '-5px'};
  bottom: 150px;
  background-color: ${props => props.themeColor};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease-in-out;
  z-index: 5;
`;

const InfoContent = styled.div<{ isOpen: boolean; themeColor: string; }>`
  position: absolute;
  right: ${props => props.isOpen ? '0px' : '-200px'};
  bottom: 150px;
  width: 235px;
  height: auto;
  background-color: ${props => props.themeColor};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: right 0.3s ease-in-out;
  z-index: 5;
  border-top-left-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  font-size: .8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
  a {
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    gap: 5px;
    width: 100%;
    padding: .1rem 0;
    background-color: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    svg {
      color: #000000;
    }
  }
`;

const Info: React.FC<InfoProps> = ({ isOpen, toggleInfo }) => {
  const { backgroundColor } = useContext(BackgroundColorContext);

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor} />
      <InfoContainer onClick={toggleInfo} isOpen={isOpen} themeColor={backgroundColor}>
        <FaInfo size={14} />
      </InfoContainer>
      <InfoContent isOpen={isOpen} themeColor={backgroundColor}>
        <h1>Sobre o Projeto</h1>
        <p>Uma plataforma para relaxar e se concentrar com músicas lo-fi e uma interface simples e personalizada.</p>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={14} /> LinkedIn </a>
          <a href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer"><FaGithub size={14} />GitHub </a>
          <a href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Tenho%20uma%20ideia%20de%20trabalho%20e%20voc%C3%AA%20%C3%A9%20o%20Desenvolvedor%20que%20eu%20preciso." target="_blank" rel="noopener noreferrer"><FaWhatsapp size={14} />WhatsApp </a>
          <a href="https://www.tiktok.com/@henriqdev?_t=8oGZNCdurJe&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok size={14} />TikTok </a>
          <a href="mailto:henriquepinheiroxavier@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={14} />  Email </a>
        </SocialLinks>
      </InfoContent>
    </>
  );
};

export default Info;
