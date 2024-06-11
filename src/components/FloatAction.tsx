import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface MenusProps {
  isOpen: boolean;
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const FloatActionContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 50px;
  bottom: 15px;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;

  color: #ffffff;
  &.open {
    transform: rotate(180deg);
  }
`;

const Menus = styled.div<MenusProps>` 
  text-align: center;
  position: absolute;
  bottom: 100%;
  margin-bottom: 1rem;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Menu = styled.a`
  width: 30px;  
  height: 30px; 
  margin: 10px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  border-radius: 50%;
  animation: ${fadeIn} 0.4s forwards;
  transition: box-shadow 0.3s;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  color: #ffffff;  

  &:hover {
    box-shadow: 0 5px 28px black;
  }

  &:nth-child(4) {
    animation-delay: 50ms;
  }
  &:nth-child(3) {
    animation-delay: 100ms;
  }
  &:nth-child(2) {
    animation-delay: 150ms;
  }
  &:nth-child(1) {
    animation-delay: 200ms;
  }
`;

const FloatAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FloatActionContainer className="floatAction">
      <Button className={`button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaChevronDown size={20} /> : <FaChevronUp size={20} />}
      </Button>
      <Menus isOpen={isOpen}>
        <Menu href="https://github.com/henriquepx" target="_blank" rel="noopener noreferrer">
          <FaGithub size={16} />
        </Menu>
        <Menu href="https://www.linkedin.com/in/henriquepinheiroxavier/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={16} /> 
        </Menu>
        <Menu href="https://www.instagram.com/henriquepxx/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={16} />
        </Menu>
        <Menu href="https://henriquepx.vercel.app/" target="_blank" rel="noopener noreferrer">
          <FaGlobe size={16} />
        </Menu>
      </Menus>
    </FloatActionContainer>
  );
};

export default FloatAction;
