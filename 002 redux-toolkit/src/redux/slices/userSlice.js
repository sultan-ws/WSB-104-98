import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:'ravindra'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeValue:(state, action)=>{
            state.value = action.payload
        }
    }
});
export const {changeValue} = userSlice.actions
export default userSlice.reducer