import { createSlice } from '@reduxjs/toolkit';

const step2Slice = createSlice({
	name: "step2",
	initialState: {
		plan: "arcade",
		billing: "monthly",
		price: 9,
		toggle: true
	},
	reducers: {
		addPlan: (state, action) => {
			return {
				...state,
				plan: action.payload.plan
			};
		},
		addBilling: (state, action) => {
			return {
				...state,
				billing: action.payload.billing
			};
		},
		addPrice: (state, action) => {
			return {
				...state,
				price: action.payload.price
			}
		},
		setToggle: (state, action) => {
			return {
				...state,
				toggle: action.payload.toggle,
			};
		}
	},
});


export const { addPlan, addBilling, addPrice, setToggle } = step2Slice.actions;
export default step2Slice.reducer;