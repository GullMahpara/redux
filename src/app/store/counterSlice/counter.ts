import {createSlice} from '@reduxjs/toolkit'
const counterSlice=createSlice(
    {
        name:"counter",
        initialState:'0',
        reducers:{
            increase:(state,payload)=>{
                console.log(increase)
                return state=state+payload.payload;
            },
            decrease:(state,payload)=>{
                console.log(decrease)
                return state=state-payload.payload;
            }
        }
    }
)
export const {increase}=counterSlice.actions
export const {decrease}=counterSlice.actions
export default counterSlice.reducer