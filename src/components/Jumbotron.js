import React from 'react';

const Jumbotron = ({title,description}) =>{
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="jumbotron-title">{title}</h1>
                <p className="jumbotron-p"> {description} </p>
            </div>
        </div>
    )
};
export default Jumbotron;