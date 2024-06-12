import styled from 'styled-components';
import { FaVolumeUp } from "react-icons/fa";


const VolumeContainer = styled.div`
  position: absolute;
  background-color: #e0e0e0;
  bottom: 80px;
  left: 0;
  padding: .3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  border: 1px solid #000;
  padding: .3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const Volume = () => {

  return (
    <VolumeContainer>
      <Button>
        <FaVolumeUp size={16}/>
      </Button>
    </VolumeContainer>
  );
};

export default Volume;
