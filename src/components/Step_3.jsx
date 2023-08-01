import React, { useState, useEffect } from "react";
import "../assets/sass/_step_3.scss";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setPrice } from "../redux/slice/step3Slice";

function Step_3({ prevStep, nextStep }) {
	const [addonsForm, setAddonsForm] = useState({
		online_service: false,
		larger_storage: false,
		custom_profile: false,
	});

	const dispatch = useDispatch();
	const billing = useSelector((state) => state.step2.billing);
	const addOns = useSelector((state) => state.step3);

	const handleCheckChange = (event) => {
		const { name, checked } = event.target;
		setAddonsForm((prev) => {
			return {
				...prev,
				[name]: checked,
			};
		});
	};

	useEffect(() => {
	  dispatch(setStatus({ status: addonsForm }));
	}, [addonsForm])
	

	useEffect(() => {
		if (billing === "monthly") {
			dispatch(
				setPrice({
					price: { online_service: 1, larger_storage: 2, custom_profile: 2 },
				}),
			);
		}

		if (billing === "yearly") {
			dispatch(
				setPrice({
					price: { online_service: 10, larger_storage: 20, custom_profile: 20 },
				}),
			);
		}
	}, [billing]);

	return (
		<div className="add_ons">
			<h2>Pick add-ons</h2>
			<p>Add-ons help enhance your gaming experience</p>

			<form>
				<label
					className="check_group"
					style={{
						backgroundColor: addonsForm.online_service && "hsl(217, 100%, 97%)",
						borderColor: addonsForm.online_service && "hsl(243, 100%, 62%)",
					}}
					htmlFor="online">
					<input
						type="checkbox"
						name="online_service"
						id="online"
						className="check_box"
						onChange={handleCheckChange}
						checked={addonsForm.online_service}
					/>
					<div className="check_details">
						<h6>Online service</h6>
						<p>Access to multiplayer games</p>
					</div>
					<span>{`+$${addOns.price.online_service}/${
						billing === "monthly" ? "mo" : "yr"
					}`}</span>
				</label>
				<label
					className="check_group"
					style={{
						backgroundColor: addonsForm.larger_storage && "hsl(217, 100%, 97%)",
						borderColor: addonsForm.larger_storage && "hsl(243, 100%, 62%)",
					}}
					htmlFor="larger">
					<input
						type="checkbox"
						name="larger_storage"
						id="larger"
						className="check_box"
						onChange={handleCheckChange}
						checked={addonsForm.larger_storage}
					/>
					<div className="check_details">
						<h6>Larger storage</h6>
						<p>Extra 1TB of cloud save</p>
					</div>
					<span>{`+$${addOns.price.larger_storage}/${
						billing === "monthly" ? "mo" : "yr"
					}`}</span>
				</label>
				<label
					className="check_group"
					style={{
						backgroundColor: addonsForm.custom_profile && "hsl(217, 100%, 97%)",
						borderColor: addonsForm.custom_profile && "hsl(243, 100%, 62%)",
					}}
					htmlFor="custom">
					<input
						type="checkbox"
						name="custom_profile"
						className="check_box"
						id="custom"
						onChange={handleCheckChange}
						checked={addonsForm.custom_profile}
					/>
					<div className="check_details">
						<h6>Customizable Profile</h6>
						<p>Custom theme on your profile</p>
					</div>
					<span>{`+$${addOns.price.custom_profile}/${
						billing === "monthly" ? "mo" : "yr"
					}`}</span>
				</label>
			</form>

			<div className="step_control_3 d-flex justify-content-between">
				<p onClick={() => prevStep()}>Go Back</p>
				<button
					className="button_3"
					onClick={() => nextStep()}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default Step_3;
