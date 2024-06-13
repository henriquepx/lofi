import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCog, FaInfo, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

interface MenuContentProps {
  isOpen: boolean;
}

const MenuContainer = styled.div<MenuContentProps>`
  position: absolute;
  width: 20px;
  height: 50px;
  right: ${props => props.isOpen ? '150px' : '10px'};
  top: 105px;
  background-color: #eeeeee;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  transition: right 0.3s ease-in-out;
  z-index: 10;
`;

const PushMenu = styled.div<{ rotate?: string }>`
  width: 0;
  height: 0;
  border-top: 10px solid transparent; 
  border-bottom: 10px solid transparent;
  border-right: 10px solid #000000; 
  transition: transform 0.3s ease-in-out;
  transform: rotate(${props => props.rotate || '90deg'});
`;

const MenuContent = styled.div<MenuContentProps>`
  position: absolute;
  right: ${props => props.isOpen ? '0' : '-250px'};
  top: 105px;
  width: 150px;
  height: 50px;
  background-color: #eeeeee;
  transition: right 0.3s ease-in-out;
  z-index: 35; 

  display: flex;
  flex-direction: column;
  text-align: right;
  padding: .7rem 1.2rem .7rem .3rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 2px 10px;
  svg {
    color: #000000;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 55px; 
  right: -10px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 15px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  width: 150px;

  &::before {
    content: '';
    position: absolute;
    top: -10px; 
    right: 10px;
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

const AdviceBlock = styled.div`
  margin: 10px 0;
`

const Advice = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid #dddddd;
  h3 {
      margin-bottom: .7rem;
      font-family: 'Roboto Mono', monospace;
      font-size: .8rem;
    }
  a:hover {
    text-decoration: underline;
  }
`;
const LinksMenuSocialLinks = styled.a`
    color: #000000; 
    display: flex;
    align-items: center;
    margin-left: auto;
    font-family: 'Roboto Mono', monospace;
    font-size: .8rem;
    gap: 10px;
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <MenuContainer onClick={toggleMenu} isOpen={isOpen}>
        <PushMenu rotate={isOpen ? '180deg' : '0deg'} />
      </MenuContainer>
      <MenuContent isOpen={isOpen}>
        <IconContainer>
          <FaCog size={20} />
          <IoMdColorPalette size={24} />
          <div style={{ position: 'relative' }}>
            <FaInfo size={20} onClick={toggleDropdown} />
            {isDropdownOpen && (
              <Dropdown>
                <AdviceBlock>
                  <Advice>lofi website 🧘🏼‍♂️</Advice>
                  <Advice>relax and focus</Advice>
                </AdviceBlock>
                
                
                <SocialLinks>
                  <h3>follow me: </h3>
                  <LinksMenuSocialLinks href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  LinkedIn<FaLinkedin size={14} />
                  </LinksMenuSocialLinks>
                  <LinksMenuSocialLinks href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                   GitHub <FaGithub size={14} /> 
                  </LinksMenuSocialLinks>
                  <LinksMenuSocialLinks href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                    Portfólio<FaExternalLinkAlt size={14} /> 
                  </LinksMenuSocialLinks>
                </SocialLinks>
              </Dropdown>
            )}
          </div>
        </IconContainer>
      </MenuContent>
    </>
  );
};

export default Menu;
