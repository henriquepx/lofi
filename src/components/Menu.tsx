import styled from 'styled-components';
import { useState } from 'react';

const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 40px; 
  height: 46px;
  width: 46px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  background-color: #161616;
  z-index: 1000;
`;

const MenuIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
`;

const MenuLine = styled.span`
  background-color: #ffffff;
  height: 3px;
  width: 30px;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s ease-in-out;
`;

const MenuOverlay = styled.div`
  background-color: #fff;
  color: #333;
  height: 30%;
  width: 60%; 
  position: fixed;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OverlayInfo = styled.h1`
  text-align: center;
  color: #111825; 
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuContainer onClick={toggleMenu}>
          <MenuIcon>
            <MenuLine/>
            <MenuLine />
            <MenuLine/>
          </MenuIcon>
      </MenuContainer>
      <MenuOverlay>
        <OverlayInfo>Your Menu Content Here</OverlayInfo>
      </MenuOverlay>
    </>
  );
};

export default Menu;
