import { PAUSE } from "./actionTypes"



const PauseAction=(data)=>{
    return{
        type :PAUSE,
        payload:data
    }
}

export default PauseAction;