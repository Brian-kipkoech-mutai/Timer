import { connect } from "react-redux"
import TimerUi from "../presentational/timerUI"
import decrementAction from "../redux/actions/decrementAction"
import incrementAction from "../redux/actions/incrementAction"
import { useCallback, useEffect, useRef, useState } from "react"
import autoDecrementAction from "../redux/actions/autodecrement.js"
import manualIncrementAction from "../redux/actions/manualincrementAction.js"
import manualdecrementAction from "../redux/actions/manualdecrementAction.js"
import breakPowerAction from "../redux/actions/breakPowerAction.js"
import PauseAction from "../redux/actions/pauseAction.js"
import playAction from "../redux/actions/playAction.js"
import resetAction from "../redux/actions/resetaAction.js"


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
   breaktimeInseconds,
   handlePause,
   handlePlay,
   handleReset,
   active,
})=>{
   console.log('active',active); 
    
   
 const alarmRef =useRef(null);
 const [show, setShow] = useState(false);
 const audio=alarmRef.current 
  
 const handleEnded= useCallback(
   ()=>{
      audio.currentTime=0;
      audio.play()
   },[audio]
       )
   const endAlarm=()=>{ 
      console.log(audio)
       if( audio){
         audio.currentTime=0
      audio.pause()
       }
       
       
   }
 
useEffect( ()=>{
     const decrementIntervals= active&&setInterval(()=>{
      if(timeInSeconds>0){
         setShow(false)
      }
        
      if(timeInMinutes>=0&&!power&&active){

         if(timeInMinutes===0 && timeInSeconds===0){
            
             
         audio.play()
                  
       audio.addEventListener('ended',handleEnded)
 
                   
               
            handleBreakPower();
            setShow(true)
            
            handleAutoDecrement()
            
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
        if (audio) {
         audio.removeEventListener('ended', handleEnded);
       }
     }
}
,[handleAutoDecrement,timeInMinutes,timeInSeconds,breakManualTimeSet,handleBreakPower,active,power,audio,handleEnded]

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
   handlePause={handlePause}
   handlePlay={handlePlay}
   handleReset={handleReset}
   active={active}
   alarmRef={alarmRef}
   show={show}
   setShow={setShow}
   endAlarm={endAlarm}
   
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
    active:state.inputReducer.active,
     
    
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
   },
   handlePause:()=>{
      dispatch(PauseAction())
   },
   handlePlay:(data)=>{
      dispatch(playAction(data))
   },
   handleReset:()=>{
      dispatch(resetAction())
   }

 })

 export  default connect(mapStateToProps,mapDispatchToProps)(TimerContainer);



