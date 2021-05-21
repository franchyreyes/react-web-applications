import React from "react";
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
  position: relative;
  left: 0;
  bottom: 0;    
  background-color: black;
  color: white;
  text-align: center;
  margin-top:40px;
`;

const Footer = styled.div`
    margin: auto;        
    width: 960px;

    p {        
        color: white;
        text-align:center;
        padding-top:15px;      
    }
`;

const AppFooter = () => (
    <FooterContainer>
        <Footer>
            <p>&copy; 2021 project </p>
        </Footer>
    </FooterContainer>

);

export default AppFooter;