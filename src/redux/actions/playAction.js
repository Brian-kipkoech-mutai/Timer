import { PLAY } from "./actionTypes"


const playAction=(data)=>{
    return{
        type:PLAY,
        payload:data
    }
}

export default playAction;