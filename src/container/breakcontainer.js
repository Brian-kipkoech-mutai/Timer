import { connect } from "react-redux"
import BreakUi from "../presentational/breakui"
import breakincrementAction from "../redux/actions/breakIncrementAction"
import breakDecrementAction from "../redux/actions/breakdecrementAction"
import { useEffect } from "react"
import breakAutoDecrementAction from "../redux/actions/breakautoDecrementAction"
import breakManualIncrementAction from "../redux/actions/breakMAnualIncrement"
import breakManualDecrementAction from "../redux/actions/breakManualDecrement"



const BreakContainer=({handleIncrement,handledecrement,timeInSeconds,timeInMinutes,handleAutoDecrement,

    handleManualIncrement,handleManualDecrement,manualTimeSet,power})=>{
        console.log('power',power);

    useEffect( ()=>{
        const decrementIntervals=setInterval(()=>{
           
          if(timeInMinutes>=0&&power){
   
            if(timeInMinutes===0 && timeInSeconds===0){
               
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
        }
   }
   ,[handleAutoDecrement,timeInMinutes,timeInSeconds,power]
   
   )

    return(
        <BreakUi
         handleIncrement={handleIncrement}
         handledecrement={handledecrement}
         timeInMinutes={timeInMinutes}
         timeInSeconds={timeInSeconds}
         handleManualDecrement={handleManualDecrement}
         handleManualIncrement={handleManualIncrement}
         manualTimeSet={manualTimeSet}
         power={power}
         
        />
    )
}
 
 const mapStateToProps=(state)=>{ 
    return{
         timeInSeconds:state.breakReducer.timeInSeconds,
         timeInMinutes:state.breakReducer.timeInMinutes,
         manualTimeSet:state.breakReducer.manualTimeSet,
         power:state.breakReducer.power
         

  
    }
 }
 const mapDispatchToProps=(dispatch)=>{
    return{
     handleIncrement:()=>{
            dispatch(breakincrementAction())
     },
     handledecrement:()=>{
        dispatch(breakDecrementAction())
     },
     handleAutoDecrement:()=>{
        dispatch(breakAutoDecrementAction())
     },
     handleManualIncrement:()=>{
          dispatch(breakManualIncrementAction())
     },
     handleManualDecrement:()=>{
        dispatch(breakManualDecrementAction())
     }
    }
 }


export  default  connect(mapStateToProps,mapDispatchToProps)(BreakContainer)