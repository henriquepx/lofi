import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { FaVolumeMute, FaVolumeDown, FaVolumeUp } from "react-icons/fa";

interface VolumeControlProps {
  isOpen: boolean;
}

const VolumeContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 50px;
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
  z-index: 999;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const VolumeIcon = styled.div<{ volume: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${(props) => props.volume === 0 ? pulse : 'none'};
`;

const VolumeControl = styled.input.attrs({ type: 'range' })<VolumeControlProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 100px; 
  height: 5px;
  position: absolute;
  left: 60%; 
  bottom: 23px; 
  transform: rotate(-90deg) translateX(-50%); 
  transform-origin: bottom left; 
  background: #ffffff;
  outline: none;
  opacity: ${(props) => (props.isOpen ? '1' : '0')}; 
  transition: opacity 0.3s;
  z-index: 998;
  margin-bottom: 4rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px; 
    height: 15px; 
    background: #0a0a0a;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Volume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [volume, setVolume] = useState(50); 

  const toggleVolume = () => {
    setIsOpen(!isOpen);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.valueAsNumber);
  };

  return (
    <VolumeContainer>
      <Button onClick={toggleVolume}>
        <VolumeIcon volume={volume}>
          {volume === 0 && <FaVolumeMute size={20} />}
          {volume > 0 && volume <= 80 && <FaVolumeDown size={20} />}
          {volume > 80 && <FaVolumeUp size={20} />}
        </VolumeIcon>
      </Button>
      <VolumeControl
        isOpen={isOpen}
        value={volume}
        onChange={handleVolumeChange}
      />
    </VolumeContainer>
  );
};

export default Volume;
