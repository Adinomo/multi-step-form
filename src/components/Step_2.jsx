import React, { useState, useEffect } from "react";
import "../assets/sass/_step_2.scss";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

function Step_2({ form, setForm, prevStep, nextStep }) {
   const [currentPlan, setCurrentPlan] = useState("arcade");
	const [toggle, setToggle] = useState(true);
	const [count, setCount] = useState(0);
	const [price, setPrice] = useState({
		arcade: 9,
      advanced: 12,
		pro: 15
	});

   const handlePlan = (event) => {
	   setCurrentPlan(event.target.id);

		setForm(prev => {
			return {
				...prev,
				plan: event.target.id
			}
		});

		setCount((prev) => prev + 1);

   }

   useEffect(() => {
      let currPrice = {}
		if (toggle) {
			setForm(prev => {
				return {
					...prev,
					billing: "monthly"
				}
			});

			setPrice(prev => {
				return {
               ...prev,
					arcade: 9,
					advanced: 12,
					pro: 15
				}
			});

		}

		if (!toggle) {
			setForm((prev) => {
				return {
					...prev,
					billing: "yearly",
				};
			});

			setPrice((prev) => {
				return {
					...prev,
					arcade: 90,
					advanced: 120,
					pro: 150,
				};
			});
		}

   setPlanPrices();
      
   }, [count])

   function setPlanPrices() {
	   if (currentPlan === "arcade" && toggle) {
			setForm(prev => {
				return{
               ...prev,
				   plan_price: 9
				}
			});
		}

		if (currentPlan === "arcade" && !toggle) {
			setForm(prev => {
				return{
               ...prev,
				   plan_price: 90
				}
			});
		}

		if (currentPlan === "advanced" && toggle) {
			setForm(prev => {
				return{
               ...prev,
				   plan_price: 12
				}
			});
		}

		if (currentPlan === "advanced" && !toggle) {
			setForm((prev) => {
				return {
					...prev,
					plan_price: 120,
				};
			});
		}

		if (currentPlan === "pro" && toggle) {
			setForm((prev) => {
				return {
					...prev,
					plan_price: 15,
				};
			});
		}

		if (currentPlan === "pro" && !toggle) {
			setForm((prev) => {
				return {
					...prev,
					plan_price: 150,
				};
			});
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
						border: currentPlan === "arcade" && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: currentPlan === "arcade" && "hsl(217, 100%, 97%)",
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
					<p>{`$${price.arcade}/${toggle ? "mo" : "yr"}`}</p>
				</div>
				<div
					className="plan__group"
					id="advanced"
					style={{
						border: "advanced" === currentPlan && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: currentPlan === "advanced" && "hsl(217, 100%, 97%)",
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
					<p>{`$${price.advanced}/${toggle ? "mo" : "yr"}`}</p>
				</div>
				<div
					className="plan__group"
					id="pro"
					style={{
						border: "pro" === currentPlan && "1px solid hsl(243, 100%, 62%)",
						backgroundColor: currentPlan === "pro" && "hsl(217, 100%, 97%)",
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
					<p>{`$${price.pro}/${toggle ? "mo" : "yr"}`}</p>
				</div>
			</form>
			<div className="billing d-flex justify-content-center">
				<p>Monthly</p>
				<div className="toggle">
					<div
						className={toggle ? "toggle__button" : "toggle__active"}
						onClick={() => {
							setToggle(!toggle);
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
