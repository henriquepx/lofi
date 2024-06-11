import styled from 'styled-components';
import { useState } from 'react';
import { FaVolumeUp } from "react-icons/fa";

// Estilo para o contêiner principal do volume
const VolumeContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 50px;
  bottom: 15px;
`;

// Estilo para o botão de volume
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

// Estilo para o controle de volume vertical
const VolumeControl = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 100px; /* Largura do controle, que será a altura do controle vertical */
  height: 5px;
  position: absolute;
  left: 50%; /* Centraliza horizontalmente o controle */
  bottom: 45px; /* Ajusta a posição acima do botão */
  transform: rotate(-90deg) translateX(-50%); /* Rotaciona o controle e ajusta a posição */
  transform-origin: bottom left; /* Define o ponto de origem da transformação */
  background: #333;
  outline: none;
  opacity: ${(props) => (props.isOpen ? '1' : '0')}; /* Exibe ou oculta baseado no estado */
  transition: opacity 0.3s;
  z-index: 998;
  margin-bottom: 4rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px; /* Largura do thumb */
    height: 15px; /* Altura do thumb */
    background: #fff;
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
  const [volume, setVolume] = useState(50); // Estado para o volume

  const toggleVolume = () => {
    setIsOpen(!isOpen);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.valueAsNumber);
  };

  return (
    <VolumeContainer>
      <Button onClick={toggleVolume}>
        <FaVolumeUp size={20} />
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
