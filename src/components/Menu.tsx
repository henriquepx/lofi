import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 80px;
  right: 0px;
  top: 105px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #eeeeee;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
`;

const PushMenu = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent; 
  border-bottom: 10px solid transparent;
  border-right: 10px solid #bbbbbb; 
  transform: translateX(-2px);
`;

const Menu = () => {
  return (
    <MenuContainer>
      <PushMenu />
    </MenuContainer>
  );
};

export default Menu;
