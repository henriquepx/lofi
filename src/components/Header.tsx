import styled from 'styled-components'
import { MdTimer } from "react-icons/md";
import { FaGithub, FaHeart  } from "react-icons/fa";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 1.3rem;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -15px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const Button = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s;
  a {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Icons>
        <Button title="Pomodoro">
          <MdTimer size={24} />
        </Button>
        <Button title="Github">
          <a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'><FaGithub size={24} /></a>
        </Button>
        <Button>
          <FaHeart size={24} />
        </Button>
      </Icons>      
    </HeaderContainer>
  )
}

export default Header
