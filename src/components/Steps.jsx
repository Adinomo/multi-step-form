import React,{useState} from 'react';
import '../assets/sass/_steps.scss';

function Steps({step}) {
	return (
		<div className="step">
			<div className="step__container mt-5 mx-4">
				<div className={1 === step ? "step__active" : "step__level"}>1</div>
				<div className="step__details">
					<p>STEP 1</p>
					<p>YOUR INFO</p>
				</div>
			</div>
			<div className="step__container mt-5 mx-4">
				<div className={2 === step ? "step__active" : "step__level"}>2</div>
				<div className="step__details">
					<p>STEP 2</p>
					<p>SELECT PLAN</p>
				</div>
			</div>
			<div className="step__container mt-5 mx-4">
				<div className={3 === step ? "step__active" : "step__level"}>3</div>
				<div className="step__details">
					<p>STEP 3</p>
					<p>ADD-ONS</p>
				</div>
			</div>
			<div className="step__container mt-5 mx-4">
				<div className={4 === step ? "step__active" : "step__level"}>4</div>
				<div className="step__details">
					<p>STEP 4</p>
					<p>SUMMARY</p>
				</div>
			</div>
		</div>
	);
}

export default Steps;