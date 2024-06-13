import { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaMusic } from "react-icons/fa";
import GlobalStyles from '../styles/GlobalStyles';
import { BackgroundColorContext } from '../context/BackgroundColorContext';

interface SongsContainerProps {
  isOpen: boolean;
  themeColor: string;
}

const SongsContainer = styled.div<SongsContainerProps>`
  position: absolute;
  width: 35px;
  height: 50px;
  right: ${props => props.isOpen ? '250px' : '-5px'};
  top: 170px;
  background-color: ${props => props.themeColor};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  transition: right 0.3s ease-in-out; 
  z-index: 5;
  svg {
    margin-right: 10px;
  }
`;

const SongContent = styled.div<SongsContainerProps>`
  position: absolute;
  right: ${props => props.isOpen ? '0px' : '-250px'}; 
  top: 170px;
  width: 250px; 
  height: 300px; 
  background-color: #eee;
  transition: right 0.3s ease-in-out; 
  z-index: 5;
  border-bottom-left-radius: 15px;
  padding: 10px; 
  display: flex;
  flex-direction: column;
`;

const SongTitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
  margin-bottom: 10px;
`;


const Song = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundColor } = useContext(BackgroundColorContext);

  const toggleSongs = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor} />
      <SongsContainer onClick={toggleSongs} isOpen={isOpen} themeColor={backgroundColor}>
        <FaMusic size={14} />
      </SongsContainer>
      <SongContent isOpen={isOpen} themeColor={backgroundColor}>
        <SongTitle>songs (enjoy):</SongTitle>
      </SongContent>
    </>
  );
};

export default Song;
