import { DECREMENT, INCREMENT ,AUTODECREMENT, MANUALINCREMENT, MANUALDECREMENT} from "../actions/actionTypes"

   
   const defaultState={
      manualMinuteset:5,
      timeInMinutes:5,
      timeInSeconds:0
   }

    const inputReducer=(state=defaultState,action)=>{

        switch(action.type){
            case MANUALINCREMENT:
                if(state.manualMinuteset<59){
                    return{
                        ...state,
                        manualMinuteset:state.manualMinuteset+1
                    }
                }
                else{
                    return{...state}
                }
            case   MANUALDECREMENT:
               if(state.manualMinuteset>1){
                return{
                    ...state,
                    manualMinuteset:state.manualMinuteset-1
                }
               }
               else{
                return{...state}
               }
            case INCREMENT:
                let value=state.timeInMinutes
                if( value<59){
                return{
                    ...state,
                    timeInMinutes:state.timeInMinutes+1,
                

                }
                }
                else{
                   return state 
                }
            case DECREMENT:
                let stateValue=state.timeInMinutes
                if(stateValue>1){
                return{
                    ...state,timeInMinutes:state.timeInMinutes-1
                }
            }
               else{
                return {...state}
               }
            case AUTODECREMENT :
                if(state.timeInMinutes===0 && state.timeInSeconds===0){
                        return{
                            ...state,
                            timeInMinutes:state.manualMinuteset
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
                
                } 
            }
            break;
                
            default:
                return state
        }

    }

       export default inputReducer;