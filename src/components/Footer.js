import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    height:100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(48,47,44);
    background: linear-gradient(0deg, rgba(48,47,44,1) 1%, rgba(11,11,11,1) 10%, rgba(0,0,0,1) 76%);
`
const Item = styled.div `
    text-decoration : none;
    font-size: 16px;
    color: #f8f8f8;
    font-weight: bold;
    bottom:0;
    position: relative;
`

function footer() {
  return(
    <React.Fragment>
        <Footer>
            <Item> developed by JE</Item>

        </Footer>
    </React.Fragment>  
  );
}

export default footer;