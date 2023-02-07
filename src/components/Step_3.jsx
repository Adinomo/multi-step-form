import React, { useState, useEffect } from "react";
import "../assets/sass/_step_3.scss";

function Step_3({ form, setForm, prevStep, nextStep }) {
	const [checkPrice, setCheckPrice] = useState({
		online: 1,
		storage: 2,
		custom: 2,
	});

	const [bill, setBill] = useState("");


	const handleCheckChange = (event) => {
		const { name, value, type, checked } = event.target;
		setForm((prev) => {
			return {
				...prev,
				[name]: checked,
			};
		});
	};

	useEffect(() => {
		if (form.billing === "monthly") {
			setBill("mo")
			setCheckPrice((prev) => {
				return {
					...prev,
					online: 1,
					storage: 2,
					custom: 2,
				};
			});

			setForm((prev) => {
				return {
					...prev,
					online_service_price: 1,
					larger_storage_price: 2,
					custom_profile_price: 2,
				};
			});
		}

		if (form.billing === "yearly") {
			setBill("yr");
			setCheckPrice((prev) => {
				return {
					...prev,
					online: 10,
					storage: 20,
					custom: 20,
				};
			});

			setForm((prev) => {
				return {
					...prev,
					online_service_price: 10,
					larger_storage_price: 20,
					custom_profile_price: 20,
				};
			});
		}
	}, [form.billing]);


	return (
		<div className="add_ons">
			<h2>Pick add-ons</h2>
			<p>Add-ons help enhance your gaming experience</p>

			<form>
				<label
					className="check_group"
					style={{
						backgroundColor: form.online_service && "hsl(217, 100%, 97%)",
						borderColor: form.online_service && "hsl(243, 100%, 62%)",
					}}
					htmlFor="online">
					<input
						type="checkbox"
						name="online_service"
						id="online"
						className="check_box"
						onChange={handleCheckChange}
						checked={form.online_service}
					/>
					<div className="check_details">
						<h6>Online service</h6>
						<p>Access to multiplayer games</p>
					</div>
					<span>{`+$${checkPrice.online}/${bill}`}</span>
				</label>
				<label
					className="check_group"
					style={{
						backgroundColor: form.larger_storage && "hsl(217, 100%, 97%)",
						borderColor: form.larger_storage && "hsl(243, 100%, 62%)",
					}}
					htmlFor="larger">
					<input
						type="checkbox"
						name="larger_storage"
						id="larger"
						className="check_box"
						onChange={handleCheckChange}
						checked={form.larger_storage}
					/>
					<div className="check_details">
						<h6>Larger storage</h6>
						<p>Extra 1TB of cloud save</p>
					</div>
					<span>{`+$${checkPrice.storage}/${bill}`}</span>
				</label>
				<label
					className="check_group"
					style={{
						backgroundColor: form.custom_profile && "hsl(217, 100%, 97%)",
						borderColor: form.custom_profile && "hsl(243, 100%, 62%)",
					}}
					htmlFor="custom">
					<input
						type="checkbox"
						name="custom_profile"
						id="custom"
						onChange={handleCheckChange}
						checked={form.custom_profile}
					/>
					<div className="check_details">
						<h6>Customizable Profile</h6>
						<p>Custom theme on your profile</p>
					</div>
					<span>{`+$${checkPrice.custom}/${bill}`}</span>
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
