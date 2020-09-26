import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    padding:0.3em 0.8em;
    border-style: solid;
    border-radius:2px;
    border-width: 1px;
    border-color: #ffffff;
    box-sizing: border-box;
    text-decoration:none;
    font-size:14px;
    font-family:'Roboto',sans-serif;
    font-weight:500;
    color:#ffffff;
    background-color:#99b4e8;
    text-align:center;
    transition: all 0.2s;

&:hover{
    color:#525252;
    background-color:#ffffff;
    border-color: #000000;
}
`;


const StyledButton = props => {
    return (
        <div className="btn-container"
            style={{
                paddingLeft: "20px"
            }}>
            <Button href={props.href} target="_blank" className="styled-button">
                {props.content}
        </Button>
        </div>
    )
};

export default StyledButton;