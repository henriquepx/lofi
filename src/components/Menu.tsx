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
  border-right: 10px solid #000000; 
  transition: transform 0.3s ease-in-out;
  transform: rotate(${props => props.rotate || '90deg'});
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
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    color: #000000;
    margin: 0 10px 10px 10px; 
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 55px; 
  right: -5px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  width: 200px;

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

const AdviceAmor = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
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
          <FaInfo size={20} />
          <div style={{ position: 'relative' }}>
            <Amor src={AmorImage} alt="Amor" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <Dropdown>
                <AdviceAmor>acredite em você.</AdviceAmor>
                <AdviceAmor>te amo</AdviceAmor>
              </Dropdown>
            )}
          </div>
        </IconContainer>
      </MenuContent>
    </>
  );
};

export default Menu;
