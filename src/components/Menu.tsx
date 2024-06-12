import { useState } from 'react';
import styled from 'styled-components';

interface MenuContentProps {
  isOpen: boolean;
}

const MenuContainer = styled.div<MenuContentProps>`
  position: absolute;
  width: 20px;
  height: 80px;
  right: ${props => props.isOpen ? '200px' : '10px'};
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
  border-right: 10px solid #bbbbbb; 
  transition: transform 0.3s ease-in-out;
  transform: rotate(${props => props.rotate || '90deg'});
  &:hover {
    border-right: 10px solid #000; 
  }
`;

const MenuContent = styled.div<MenuContentProps>`
  position: absolute;
  right: ${props => props.isOpen ? '0' : '-250px'};
  top: 105px;
  width: 200px;
  height: 500px;
  background-color: #eeeeee;
  transition: right 0.3s ease-in-out;
  z-index: 35; 

  display: flex;
  text-align: center;
`;

const TitleMenu = styled.h1`
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuContainer onClick={toggleMenu} isOpen={isOpen}>
        <PushMenu rotate={isOpen ? '180deg' : '0deg'} />
      </MenuContainer>
      <MenuContent isOpen={isOpen}>
        <TitleMenu>lofi concentration</TitleMenu>

      
      </MenuContent>
    </>
  );
};

export default Menu;
