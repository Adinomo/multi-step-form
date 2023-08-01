import React, { useState, useEffect } from 'react';
import '../assets/sass/_step_4.scss';
import { useDispatch, useSelector } from 'react-redux'


function Step_4({ nextStep, prevStep, changePlan }) {
	const [sumTotal, setSumTotal] = useState(0)

	const billing = useSelector((state) => state.step2.billing);
	const addOns = useSelector((state) => state.step3);
	const plan = useSelector((state) => state.step2);
	
	function getTotal() {
		let total = plan.price;
		if(addOns.status.online_service){
			total += addOns.price.online_service;
		}

		if(addOns.status.larger_storage){
			total += addOns.price.larger_storage;
		}

		if(addOns.status.custom_profile){
			total += addOns.price.custom_profile;
		}

		setSumTotal(total);
	}
	
	useEffect(() => {
		getTotal();
	}, [
		addOns.price.online_service,
		addOns.price.larger_storage,
		addOns.price.larger_storage,
	]);
	
	return (
		<div className="summary">
			<h2>Finishing up</h2>
			<p>Double-check everything looks OK before confirming.</p>
			<div className="summary_list">
				<div className="summary_plan d-flex justify-content-between">
					<div className="summary_billing">
						<p className="text-capitalize">{`${plan.plan} (${billing})`}</p>
						<small onClick={() => changePlan()}>Change</small>
					</div>
					<div className="price">{`$${plan.price}/${billing === "monthly" ? "mo" : "yr"}`}</div>
				</div>
				<div className="summary_addons mt-3">
					{addOns.status.online_service && (
						<div className="d-flex justify-content-between order">
							<p>Online service</p>
							<p>{`+$${addOns.price.online_service}/${billing === "monthly" ? "mo" : "yr"}`}</p>
						</div>
					)}
					{addOns.status.larger_storage && (
						<div className="d-flex justify-content-between order">
							<p>Larger storage</p>
							<p>{`+$${addOns.price.larger_storage}/${billing === "monthly" ? "mo" : "yr"}`}</p>
						</div>
					)}
					{addOns.status.custom_profile && (
						<div className="d-flex justify-content-between order">
							<p>Customizable profile</p>
							<p>{`+$${addOns.price.custom_profile}/${billing === "monthly" ? "mo" : "yr"}`}</p>
						</div>
					)}
				</div>
			</div>
			<div className="total d-flex justify-content-between">
				<p>{`Total(per ${billing})`}</p>
				<p>{`+$${sumTotal}/${billing === "monthly" ? "mo" : "yr"}`}</p>
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