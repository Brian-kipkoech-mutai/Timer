
import up from '../assets/new.png'
import down from  '../assets/minus.png'
const BreakUi=({
    handleIncrement,
    handledecrement,
     active,
    handleManualIncrement,
    handleManualDecrement,
     
          })=>{
    return(
   <div className="breakbox">
   
        <div className="breakdisplay">
             <img id="break-increment"  src={up}  alt='up Button' className="increment" onClick={()=>{
               !active&& handleIncrement()
               !active&& handleManualIncrement()
            }}></img>
            <img id="break-decrement" src={down} alt='Down Button' className="decrement" onClick={()=>{
                !active&& handledecrement()
                !active&& handleManualDecrement()
            }}></img>
        </div>
   </div>
    )
}


export  default BreakUi