import { connect } from "react-redux"
import TimerUi from "../presentational/timerUI"
import decrementAction from "../redux/actions/decrementAction"
import incrementAction from "../redux/actions/incrementAction"
import { useEffect } from "react"
import autoDecrementAction from "../redux/actions/autodecrement.js"
import manualIncrementAction from "../redux/actions/manualincrementAction.js"
import manualdecrementAction from "../redux/actions/manualdecrementAction.js"
import breakPowerAction from "../redux/actions/breakPowerAction.js"


 const  TimerContainer=({
   timeInMinutes,
   handleDecrement,
   handleIncrement,
   handleAutoDecrement,
   timeInSeconds,
   manualMinuteset,
   handleManualDecrement,
   handleManualIncrement,
   breakManualTimeSet,
   handleBreakPower,
   power,
   breakTimeInMinutes,
   breaktimeInseconds
})=>{
    
useEffect( ()=>{
     const decrementIntervals=setInterval(()=>{
        
       if(timeInMinutes>=0){

         if(timeInMinutes===0 && timeInSeconds===0){
            handleBreakPower();
            setTimeout(()=>{
               handleAutoDecrement()
            },1000*(breakManualTimeSet*60)+1000)
          } 
             else if(timeInMinutes===0&&timeInSeconds>0){
               handleAutoDecrement()
             }
             else if(timeInMinutes>0&&timeInSeconds>=0){
               handleAutoDecrement()
             }
               
       } 
     },1000)

     return ()=>{
        clearInterval(decrementIntervals)
     }
}
,[handleAutoDecrement,timeInMinutes,timeInSeconds,breakManualTimeSet,handleBreakPower]

)
console.log('manulaMinuteSet',manualMinuteset);
console.log('mintes',timeInMinutes);
console.log('seconds',timeInSeconds);
return(

   <TimerUi
   
   timeInMinutes={timeInMinutes}
   handleDecrement={handleDecrement}
   handleIncrement={handleIncrement}
   timeInSeconds={timeInSeconds}
   handleManualDecrement={handleManualDecrement}
   handleManualIncrement={handleManualIncrement}
   manualMinuteset={manualMinuteset}
   power={power}
   breaktimeInseconds={breaktimeInseconds}
   breakTimeInMinutes={breakTimeInMinutes}
   breakManualTimeSet={breakManualTimeSet}
   
   />

)



 }
 const mapStateToProps=(state)=>({
  
    timeInMinutes: state.inputReducer.timeInMinutes,
    timeInSeconds:state.inputReducer.timeInSeconds,
    manualMinuteset:state.inputReducer.manualMinuteset,
    breakManualTimeSet:state.breakReducer.manualTimeSet,
    power:state.breakReducer.power,
    breakTimeInMinutes:state.breakReducer.timeInMinutes,
    breaktimeInseconds:state.breakReducer.timeInSeconds,
    
 })



 const mapDispatchToProps=(dispatch)=>({
    handleManualDecrement:()=>{
        dispatch(manualdecrementAction())
    },
    handleManualIncrement:()=>{
     dispatch(manualIncrementAction())
    },

   handleDecrement:()=>{
     dispatch(decrementAction())
   },
   handleIncrement:()=>{
    dispatch(incrementAction())
    
   },
   handleAutoDecrement:()=>{
    dispatch(autoDecrementAction())
    
   },
   handleBreakPower:()=>{
      dispatch(breakPowerAction())
   }

 })

 export  default connect(mapStateToProps,mapDispatchToProps)(TimerContainer);



