import {Data} from "../Data"
import {createSlice} from "@reduxjs/toolkit"

const talalatSlice=createSlice({
    name:"talalat",
    initialState:{
        value: Data[Math.floor( Math.random()*Data.length)],
        positions: []
    },
    reducers:{
        talalt: (state,action)=>{
            state.init=false
            if(state.value.indexOf(action.payload)!=-1){
                
                for(let i=0;i<state.value.length;i++){
                    if(state.value[i]==action.payload)
                        state.positions.push(i);
                }
                state.positions=[...state.positions]
            }

        }
    }
})

export default talalatSlice.reducer
export const {ujjszo,talalt} = talalatSlice.actions;