import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBar>
                <CustomNavLink to="/structurels">Diagrammes Structurels</CustomNavLink>
                <CustomNavLink to="/comportementaux">Diagrammes Comportementaux</CustomNavLink>
                <CustomNavLink to="/merise">Diagrammes Merise</CustomNavLink>
            </HeaderBar>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
  min-height: 70px;
  height: auto;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
`;

const HeaderBar = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


const CustomNavLink = styled(NavLink)`
  display: flex;
  height: 50px;
  width: 30%;
  font-size: 30px;
  text-transform: none;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Roboto Light", sans-serif;
  color: black;
  border-radius: 10px;
  
  &:hover{
    box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  }
`;
