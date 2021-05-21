import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const Nav = styled.nav`
      background-color: #f1f1f1;            
      padding: 20px;
      box-shadow: 0 2px 4px black;
            
      a{
          color:black;
          padding: 20px;
          text-decorationL:none;

          &:hover{
              
              border: solid 1px red;
              color:black;
          }
      }
`;

const Header = styled.div`
      padding-top:10px;
      margin-bottom:40px;
`;

const activeStyle = {
    color: "black",
    fontWeight: "bold",
    background: 'white',
};

const HeaderContainer = () => {

    return (
        <Header>
            <div>
                <Nav>
                    <NavLink to="/" activeStyle={activeStyle} exact>
                        Player</NavLink>

                    <NavLink to="/task" activeStyle={activeStyle}>
                        Task</NavLink>
                </Nav>
            </div>
        </Header>
    );
};

export default HeaderContainer;
