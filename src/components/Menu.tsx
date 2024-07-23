import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaClock, FaInfo, FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import GlobalStyles from '../styles/GlobalStyles';
import { BackgroundColorContext } from '../context/BackgroundColorContext'; 
import PomodoroTimer from './PomodoroTimer';

interface MenuContentProps {
  isOpen: boolean;
  themeColor: string;
}

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface BgColor {
  themeColor: string;
}

const MenuContainer = styled.div<MenuContentProps>`
  position: absolute;
  width: 20px;
  height: 50px;
  right: ${props => props.isOpen ? '150px' : '10px'};
  top: 105px;
  background-color: ${props => props.themeColor};
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
  background-color: ${props => props.themeColor};
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

const Dropdown = styled.div<BgColor>`
  position: absolute;
  top: 50px; 
  right: -10px;
  background-color: ${props => props.themeColor};
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 15px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const DropdownStyles = styled(Dropdown)`
  right: 25px;
  top: 63px;
`;

const DropdownPomodoro = styled(Dropdown)`
  right: 25px;
  top: 63px;
`;

const AdviceBlock = styled.div`
  margin: 10px 0;
`;

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
`;

const LinksMenuSocialLinks = styled.a`
  color: #000000; 
  display: flex;
  align-items: center;
  margin-left: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
  gap: 10px;
`;

const colors = ["#eeeeee", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [isPaletteDropdownOpen, setIsPaletteDropdownOpen] = useState(false);
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundColorContext);

  const toggleDropdown = (type: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInfoDropdownOpen(type === 'info' ? !isInfoDropdownOpen : false);
    setIsSettingsDropdownOpen(type === 'settings' ? !isSettingsDropdownOpen : false);
    setIsPaletteDropdownOpen(type === 'palette' ? !isPaletteDropdownOpen : false);
  };

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
    setIsPaletteDropdownOpen(false);
  };

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor} />
      <MenuContainer onClick={toggleMenu} isOpen={isOpen} themeColor={backgroundColor}>
        <PushMenu rotate={isOpen ? '180deg' : '0deg'} />
      </MenuContainer>
      <MenuContent isOpen={isOpen} themeColor={backgroundColor}>
        <IconContainer>
          <FaClock size={20} onClick={toggleDropdown('settings')} />
          {isSettingsDropdownOpen && (
            <DropdownPomodoro themeColor={backgroundColor}>
              <PomodoroTimer />
            </DropdownPomodoro>
          )}
          <IoMdColorPalette size={24} onClick={toggleDropdown('palette')} />
          {isPaletteDropdownOpen && (
            <DropdownStyles themeColor={backgroundColor}>
              {colors.map((color) => (
                <AdviceBlock key={color} onClick={() => handleColorChange(color)} style={{ cursor: 'pointer' }}>
                  <Advice style={{ backgroundColor: color, padding: '5px', borderRadius: '3px' }}>
                    {color}
                  </Advice>
                </AdviceBlock>
              ))}
            </DropdownStyles>
          )}
          <div style={{ position: 'relative' }}>
            <FaInfo size={20} onClick={toggleDropdown('info')} />
            {isInfoDropdownOpen && (
              <Dropdown themeColor={backgroundColor}>
                <AdviceBlock>
                  <Advice>lofi website 🧘🏼‍♂️</Advice>
                  <Advice>relax and focus</Advice>
                </AdviceBlock>
                <SocialLinks>
                  <LinksMenuSocialLinks href="https://www.linkedin.com/in/henriquepinheiroxavier/" target="_blank" rel="noopener noreferrer">
                    LinkedIn<FaLinkedin size={14} />
                  </LinksMenuSocialLinks>
                  <LinksMenuSocialLinks href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer">
                    GitHub<FaGithub size={14} />
                  </LinksMenuSocialLinks>
                  <LinksMenuSocialLinks href="https://henriquepx.vercel.app/" target="_blank" rel="noopener noreferrer">
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
