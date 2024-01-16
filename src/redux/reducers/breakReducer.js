import { BREAKAUTODECREMENT, BREAKDECREMENT, BREAKINCREMENT, BREAKMANUALDECREMENT, BREAKMANUALINCREMENT, BREAKPOWER, RESET } from "../actions/actionTypes"


 const defaultState={
    defaultMinutes:5,
    timeInMinutes:5,
    timeInSeconds:0,
    manualTimeSet:5,
    power:false
 }

const breakReducer=( state=defaultState,action)=>{
    switch(action.type){
        case BREAKDECREMENT:
 if(state.timeInMinutes>1){
    return{
        ...state,
        timeInMinutes:state.timeInMinutes-1
    }
    
 }
 else{
    return{
        ...state
    }
 }
        case  BREAKINCREMENT:
            if(state.timeInMinutes<=59){
                return{
                    ...state,
                    timeInMinutes:state.timeInMinutes+1
                }
            }
            else{
                return{
                    ...state
                }
            }
        case BREAKAUTODECREMENT:
            if(state.timeInMinutes===0&&state.timeInSeconds===0){
                return{
                    ...state,
                    timeInMinutes:state.manualTimeSet,
                    power:false

                }
            }
            if(state.timeInMinutes>0&&state.timeInSeconds===0){
                return{
                    ...state,
                    timeInMinutes:state.timeInMinutes-1,
                    timeInSeconds:59
                }
            }
        else if(state.timeInMinutes>=0){
            return {...state,
                timeInSeconds:state.timeInSeconds-1
            
            } }

            else{
                return{
                   ...state
                }
            }

        case BREAKMANUALDECREMENT:
            if(state.manualTimeSet>1){
                return{
                    ...state,
                    manualTimeSet:state.manualTimeSet-1
                }
            }
            else{
                return{
                    ...state
                }
            }
        case  BREAKMANUALINCREMENT:
            if(state.manualTimeSet<=59){
                return{
                    ...state,
                    manualTimeSet:state.manualTimeSet+1
                }
            }
            else{
                return{
                    ...state
                }
            }
        case BREAKPOWER:
            return{
                ...state,
                power:true
            }
        case RESET:
            return{
                ...state,
                timeInMinutes:state.defaultMinutes,
                timeInSeconds:0,
                manualTimeSet:5,
                power:false

            }
        default:
            return state
            
    }
    

}

export default breakReducer;