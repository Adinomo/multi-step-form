import { createSlice } from "@reduxjs/toolkit";

const step3Slice = createSlice({
	name: "step3",
	initialState: {
		status: {
			online_service: false,
			larger_storage: false,
			custom_profile: false,
		},
		price: {
			online_service: 1,
			larger_storage: 2,
			custom_profile: 2,
		},
	},
	reducers: {
		setStatus: (state, action) => {
			return {
				...state,
				status: action.payload.status
			};
		},
		setPrice: (state, action) => {
			return {
				...state,
				price: action.payload.price,
			};
		}
	}
});

export const { setStatus, setPrice } = step3Slice.actions;
export default step3Slice.reducer;
