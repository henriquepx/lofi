import { useState } from 'react';
import styled from 'styled-components';
import { FaCog, FaInfo } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import AmorImage from '../assets/amor.png';
interface MenuContentProps {
  isOpen: boolean;
}

const MenuContainer = styled.div<MenuContentProps>`
  position: absolute;
  width: 20px;
  height: 50px;
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
  height: 50px;
  background-color: #eeeeee;
  transition: right 0.3s ease-in-out;
  z-index: 35; 

  display: flex;
  flex-direction: column;
  text-align: right;
  padding: .7rem 1.2rem .7rem .3rem;
`;

const Amor = styled.img`
  border-radius: 50%;
  width: 30px;
  cursor: pointer;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    color: #000000;
    margin: 0 10px; 
    cursor: pointer;
  }
`;

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
        <IconContainer>
            <FaCog size={20} />
            <IoMdColorPalette size={24} />
            <FaInfo size={20} />
            <Amor src={AmorImage} alt="Amor" />
          </IconContainer>
      </MenuContent>
    </>
  );
};

export default Menu;
