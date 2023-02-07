import React, { useState} from 'react';
import '../assets/sass/step_1.scss';
import validator from 'validator';

function Step_1({ form, setForm, nextStep }) {
	const [formError, setFormError] = useState(false);
	const [ferror, setFerror] = useState({ })
	const handleChange = (event) => {
		const { name, value, type, checked} = event.target
		setForm(prev => {
			return{
				...prev,
				[name]: value
			}
		})
	}
	
	
	const handleSubmit = (e) => {
		e.preventDefault();

		let error = {}

		if (
			validator.isEmpty(form.name) ||
			validator.isEmpty(form.email) ||
			validator.isEmpty(form.phone)
		) {
			setFormError(true);
		} else {
			nextStep()
		}

		if(validator.isEmpty(form.name)){
			error.name = "This field is required"
		}

		if (validator.isEmpty(form.email)) {
			error.email = "This field is required";
		}

		if (validator.isEmpty(form.phone)) {
			error.phone = "This field is required";
		}

		setFerror({ ...error })
		

	}
   
	return (
		<div className="stepOne">
			<h2 className="stepOne__label">Personal info</h2>
			<p>Please provide your name, email address, and phone number.</p>
			<form 
			   className="personal_form"
			   onSubmit={handleSubmit}>
				<div className="form-group d-flex flex-column">
					<label>Name</label>
					<input
						className={ferror.name && "error"}
						type="text"
						placeholder="e.g.Stephen King"
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
					<small>{ferror.name}</small>
				</div>
				<div className="form-group d-flex flex-column mt-4">
					<label>Email Address</label>
					<input
						className={ferror.email && "error"}
						type="email"
						placeholder="e.g.stephenking@lorem.com"
						name="email"
						value={form.email}
						onChange={handleChange}
					/>
					<small>{ferror.email}</small>
				</div>
				<div className="form-group d-flex flex-column mt-4">
					<label>Phone Number</label>
					<input
						className={ferror.phone && "error"}
						type="number"
						placeholder="e.g. +1 234 567 890"
						name="phone"
						value={form.number}
						onChange={handleChange}
					/>
					<small>{ferror.phone}</small>
				</div>
				<input
					type="submit"
					className="button"
					value="Next Step"
				/>
			</form>
		</div>
	);
}

export default Step_1;