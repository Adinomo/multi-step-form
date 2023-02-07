import React, { useState, useEffect } from 'react';
import '../assets/sass/_step_4.scss';

function Step_4({ form, nextStep, prevStep, changePlan }) {
   const [abbrev, setAbbrev] = useState("");
	const [bill, setBill] = useState("")
	const [sumTotal, setSumTotal] = useState(0)
	
	function getTotal() {
		let total = form.plan_price;
		if(form.online_service){
			total = total + form.online_service_price;
		}

		if(form.larger_storage){
			total = total + form.larger_storage_price;
		}

		if(form.custom_profile){
			total = total + form.custom_profile_price;
		}

		setSumTotal(total);
	}

	useEffect(() => {
		if (form.billing === "monthly") {
			setAbbrev("mo");
			setBill("month");
		}

		if (form.billing === "yearly") {
			setAbbrev("yr");
			setBill("year")
		}

	}, [form.billing])
	
	useEffect(() => {
		getTotal();
	},[form.online_service]);

	useEffect(() => {
		getTotal();
	}, [form.larger_storage]);

   useEffect(() => {
		getTotal();
	}, [form.custom_profile]);
	
	return (
		<div className="summary">
			<h2>Finishing up</h2>
			<p>Double-check everything looks OK before confirming.</p>
			<div className="summary_list">
				<div className="summary_plan d-flex justify-content-between">
					<div className="summary_billing">
						<p className="text-capitalize">{`${form.plan} (${form.billing})`}</p>
						<small onClick={() => changePlan()}>Change</small>
					</div>
					<div className="price">{`$${form.plan_price}/${abbrev}`}</div>
				</div>
				<div className="summary_addons mt-3">
					{form.online_service && (
						<div className="d-flex justify-content-between order">
							<p>Online service</p>
							<p>{`+$${form.online_service_price}/${abbrev}`}</p>
						</div>
					)}
					{form.larger_storage && (
						<div className="d-flex justify-content-between order">
							<p>Larger storage</p>
							<p>{`+$${form.larger_storage_price}/${abbrev}`}</p>
						</div>
					)}
					{form.custom_profile && (
						<div className="d-flex justify-content-between order">
							<p>Customizable profile</p>
							<p>{`+$${form.custom_profile_price}/${abbrev}`}</p>
						</div>
					)}
				</div>
			</div>
			<div className="total d-flex justify-content-between">
				<p>Total(per {bill})</p>
				<p>{`+$${sumTotal}/${abbrev}`}</p>
			</div>
			<div className="step_control_4 d-flex justify-content-between">
				<p onClick={() => prevStep()}>Go Back</p>
				<button
					className="button_3"
					onClick={() => nextStep()}>
					Confirm
				</button>
			</div>
		</div>
	);
}

export default Step_4;