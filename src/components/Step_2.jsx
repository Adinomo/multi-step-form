import React, { useState, useEffect, useRef } from "react";
import "../assets/sass/_step_2.scss";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addPlan, addBilling, addPrice, setToggle } from '../redux/slice/step2Slice';

function Step_2({ prevStep, nextStep }) {
	const [count, setCount] = useState(0);

	const price = useRef({
		arcade: 9,
      advanced: 12,
		pro: 15
	});

	const dispatch = useDispatch(); 
	const plan = useSelector(state => state.step2);

   const handlePlan = (event) => {
		const { id } = event.target
		dispatch(addPlan({ plan: id }))

		setCount((prev) => prev + 1);

   }

   useEffect(() => {
		if (plan.toggle) {
			dispatch(addBilling({ billing: "monthly" }))

			price.current = {
				arcade: 9,
				advanced: 12,
				pro: 15,
			};
		}

		if (!plan.toggle) {
			dispatch(addBilling({ billing: "yearly" }));

			price.current = {
				arcade: 90,
				advanced: 120,
				pro: 150,
			};
		}

   setPlanPrices();
      
   }, [count])

   function setPlanPrices() {
	   if (plan.plan === "arcade" && plan.toggle) {
			dispatch(addPrice({ price: 9 }));
		}

		if (plan.plan === "arcade" && !plan.toggle) {
			dispatch(addPrice({ price: 90 }));
		}

		if (plan.plan === "advanced" && plan.toggle) {
			dispatch(addPrice({ price: 12 }));
		}

		if (plan.plan === "advanced" && !plan.toggle) {
			dispatch(addPrice({ price: 120 }));
		}

		if (plan.plan === "pro" && plan.toggle) {
			dispatch(addPrice({ price: 15 }));
		}

		if (plan.plan === "pro" && !plan.toggle) {
			dispatch(addPrice({ price: 150 }));
		}
	}

	return (
		<div className="content_2">
			<h2 className="content__label">Select your Plan</h2>
			<p>You have the option of monthly or yearly billing</p>
			<form className="plan">
				<div
					className="plan__group"
					id="arcade"
					style={{
						border: plan.plan === "arcade" && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: plan.plan === "arcade" && "hsl(217, 100%, 97%)",
					}}
					onClick={handlePlan}>
					<input
						type="radio"
						name="plan"
						id="arcade"
						onChange={handlePlan}
					/>
					<img
						src={arcade}
						alt="arcade"
					/>
					<label htmlFor="arcade">Arcade</label>
					<p>{`$${price.current.arcade}/${plan.toggle ? "mo" : "yr"}`}</p>
				</div>
				<div
					className="plan__group"
					id="advanced"
					style={{
						border: "advanced" === plan.plan && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: plan.plan === "advanced" && "hsl(217, 100%, 97%)",
					}}
					onClick={handlePlan}>
					<input
						type="radio"
						name="plan"
						id="advanced"
						onChange={handlePlan}
					/>
					<img
						src={advanced}
						alt="advanced"
					/>
					<label htmlFor="advanced">Advanced</label>
					<p>{`$${price.current.advanced}/${plan.toggle ? "mo" : "yr"}`}</p>
				</div>
				<div
					className="plan__group"
					id="pro"
					style={{
						border: "pro" === plan.plan && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: plan.plan === "pro" && "hsl(217, 100%, 97%)",
					}}
					onClick={handlePlan}>
					<input
						type="radio"
						name="plan"
						id="pro"
						onChange={handlePlan}
					/>
					<img
						src={pro}
						alt="pro"
					/>
					<label htmlFor="pro">Pro</label>
					<p>{`$${price.current.pro}/${plan.toggle ? "mo" : "yr"}`}</p>
				</div>
			</form>
			<div className="billing d-flex justify-content-center">
				<p>Monthly</p>
				<div className="toggle">
					<div
						className={plan.toggle ? "toggle__button" : "toggle__active"}
						onClick={() => {
							dispatch(setToggle({ toggle: !plan.toggle }))
							setCount((prev) => prev + 1);
						}}></div>
				</div>
				<p>Yearly</p>
			</div>
			<div className="step_control d-flex justify-content-between ">
				<p onClick={() => prevStep()}>Go back</p>
				<button
					className="button_2"
					onClick={() => nextStep()}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default Step_2;
