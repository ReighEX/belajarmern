import React from  'react';
import './index.scss';
import Title from './title';

export default class Sass extends React.Component {

    render(){
        return(
            <div>
                <Title/>
                <h3 className="Title">MERN Trainee</h3>
                <button className="btn btn-danger">Da Away</button>
            </div>
        )
    }
}