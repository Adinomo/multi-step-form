import { configureStore } from '@reduxjs/toolkit';
import step1Slice from './slice/step1Slice';
import step2Slice from './slice/step2Slice';
import step3Slice from './slice/step3Slice';

const store = configureStore({
	reducer: {
		step1: step1Slice,
		step2: step2Slice,
		step3: step3Slice,
	}
})


export default store;

