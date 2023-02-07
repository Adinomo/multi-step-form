import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/_index.scss";
import Steps from "./components/Steps";
import Step_1 from "./components/Step_1";
import Step_2 from "./components/Step_2";
import Step_3 from "./components/Step_3";
import Step_4 from "./components/step_4";
import Step_5 from "./components/Step_5";

function App() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		plan: "arcade",
		billing: "monthly",
		plan_price: 9,
      online_service: false,
		online_service_price: 0,
      larger_storage: false,
		larger_storage_price: 0,
      custom_profile: false,
		custom_profile_price: 0
	});

	console.log(formData);
	console.log(step)

	const prevStep = () => {
		setStep((prev) => prev - 1);
	};

	const nextStep = function () {
		setStep((prev) => prev + 1);
	};

	const changePlan = () => {
		setStep(prev => prev - 2);
	}

	const renderStep = (param) => {
		switch (param) {
			case 1:
				return <Step_1 form={formData} setForm={setFormData} nextStep={() => nextStep()} />;
			case 2:
				return (
					<Step_2
						form={formData}
						setForm={setFormData}
						prevStep={() => prevStep()}
						nextStep={() => nextStep()}
					/>
				);
			case 3:
				return (
				   <Step_3
					   form={formData}
						setForm={setFormData}
						prevStep={() => prevStep()} 
				      nextStep={() => nextStep()} 
					/>
				);
			case 4:
				return (
				   <Step_4 
					   form={formData}
						prevStep={() => prevStep()}
					   nextStep={() => nextStep()} 
						changePlan={() => changePlan()}
					/>
				);
			case 5:
				return <Step_5 />
			default:
				break;
		}
	};
	return (
		<div className="app container-fluid mt-1 d-flex align-items-center justify-content-center">
			<div className="form_app d-flex flex-row">
				<div>
					<Steps step={step} />
				</div>
				<div className="content p-5 d-flex align-items-center justify-content-center">{renderStep(step)}</div>
			</div>
		</div>
	);
}

export default App;
