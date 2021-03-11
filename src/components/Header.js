import React from 'react';
import styled from 'styled-components';
import logo from './img/Logo_foguete.png';


const Nav = styled.div `
    background: rgb(48,47,44);
    background: linear-gradient(0deg, rgba(48,47,44,1) 1%, rgba(11,11,11,1) 10%, rgba(0,0,0,1) 76%);
    position: relative;
    display: flex;
    align-items:center;
    width: 100%;
    height: 60px;
    `
const Item = styled.table `
    font-size:14px;
    font-family: Andale Mono, monospace;
    font-weight: bold;
    color: #f8f8f8;
    padding : 30px;
    text-decoration: none;
`


function header(){
    return(
       <Nav>
            <Item as="img" src={logo} height="45px" width="auto"></Item>
            <Item as="a" href="/"> HOME </Item>
            <Item as="a" href="/"> US </Item>
            <Item as="a" href="/"> CONTACT</Item>
       </Nav>
    );
}
export default header;