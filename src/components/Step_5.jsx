import React from 'react';
import '../assets/sass/_step_5.scss'
import check from '../assets/images/icon-thank-you.svg';

function Step_5() {
	return ( 
	   <div className="final d-flex flex-column justify-content-center align-content-center">
			<img src={check} alt="Thank you" width={100} className="mx-auto"/>
			<h3 className='text-center'>Thank you!</h3>
			<p className='text-center'>
				Thanks for confirming your subscription! We hope you have fun using our platform.
				If you ever need support, please feel free to email us at support@loremgaming.com.
			</p>
	   </div> 
	);
}

export default Step_5;