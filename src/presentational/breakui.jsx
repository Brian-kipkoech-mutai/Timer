
import up from '../assets/controlsIcons/up-arrow.png'
import down from  '../assets/controlsIcons/arrow-down-sign-to-navigate.png'
const BreakUi=({
    handleIncrement,
    handledecrement,
    timeInSeconds,timeInMinutes,
    handleManualIncrement,
    handleManualDecrement,
    manualTimeSet,
    power 
          })=>{
    return(
   <div className="breakbox">
   
        <div className="breakdisplay">
             <img  src={up}  alt='Down Button' className="increment" onClick={()=>{
                handleIncrement()
                handleManualIncrement()
            }}></img>
            <img src={down} alt='Down Button' className="decrement" onClick={()=>{
                handledecrement()
                handleManualDecrement()
            }}></img>
        </div>
   </div>
    )
}


export  default BreakUi