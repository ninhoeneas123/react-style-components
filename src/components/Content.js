import React from 'react';
import styled from 'styled-components'
import Img from './img/astro.png'

const Content = styled.main ` 
    background-image: url(${Img}) ;
    justify-content: space-between;
    align-items: center;
    flex-direction:row;
    width: 100%;
    height: 800px;
    margin: 0 auto;
    box-sizing: border-box;
`
const Transp = styled.div `
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: space-between;
    align-items: center;
    flex-direction:row;
    width: 100%;
    height: 800px;
    margin: 0 auto;
    display:flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Item = styled.h1 `
    color: #FFFAFA;
    text-align: center;
    font-family: Andale Mono, monospace;
    width: auto;
    padding: 10px;
    box-sizing: border-box;
    margin: 40px;
    float: left;
    font-size:65px;
    margin-top: -20px;
    margin-left:-85px;

`
function content(){
    return(
    <React.Fragment>
        <Content>
            <Transp>
                <Item>
                   SPACE CODER
                </Item>
            </Transp>
        </Content>
    </React.Fragment>
        );
}

export default content;