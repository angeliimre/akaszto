import {createSlice} from "@reduxjs/toolkit"


const rajzSlice=createSlice({
    name: "rajz",
    initialState:{
        value: './img/0.png',
        misstake: 0,
    },
    reducers:{
        rajzol: (state)=>{
            state.misstake+=1
            if(state.misstake<=5){
                state.value="./img/"+state.misstake+".png"
            }else{
                state.value="./img/5.png"
            }
            
        }
    }
})

export const {lenullaz,rajzol}=rajzSlice.actions
export default rajzSlice.reducer