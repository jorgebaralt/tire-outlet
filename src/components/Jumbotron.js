import React from 'react';

const Jumbotron = ({ title, description }) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1>{title}</h1>
				<p style={{ fontSize: 15 }}> {description} </p>
			</div>  
		</div>
	);
};
export default Jumbotron;
