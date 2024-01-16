import { DECREMENT, INCREMENT ,AUTODECREMENT, MANUALINCREMENT, MANUALDECREMENT, PLAY, PAUSE,RESET} from "../actions/actionTypes"

   
   const defaultState={
     defaultMinutes:25,
      manualMinuteset:25,
      timeInMinutes:25,
      timeInSeconds:0,
      active :false,
   }

    const inputReducer=(state=defaultState,action)=>{

        switch(action.type){
            case RESET:
            return{
                ...state,
                timeInMinutes: state.defaultMinutes,
                timeInSeconds:0,
                active: false,
                manualMinuteset:state.defaultMinutes

            }

            case PLAY:
                return{
                    ...state,
                    active:action.payload
                }
             case PAUSE:
                return{
                    ...state,
                    active:false
                }
            case MANUALINCREMENT:
                if(state.manualMinuteset<=59){
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
                if( value<=59){
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