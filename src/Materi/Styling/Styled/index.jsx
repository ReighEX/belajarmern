import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
border: 4px solid white;
background-color: black;
color: white;
padding: 15px 30px;
font-size: 32px;
cursor: pointer;
border-color: darkcyan;
color: darkcyan;

&:hover{
    background: darkcyan;
    color: white;
}
`;

export default class Styled extends React.Component{
    render(){
        return( 
            <div>
                <Button>GG</Button>
            </div>
        )
    }
}