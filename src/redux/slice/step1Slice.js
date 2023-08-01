import { createSlice } from '@reduxjs/toolkit';

const step1Slice = createSlice({
	name: "step1",
	initialState: {
		name: "",
		email: "",
		phone: "",
	},
	reducers: {
		addForm: (state, action) => {
			return action.payload.form
		}
	}
});


export const { addForm } = step1Slice.actions;
export default step1Slice.reducer