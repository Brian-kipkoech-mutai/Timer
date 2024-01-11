import Breakcontainer from "../container/breakcontainer"
import downArrow from '../assets/controlsIcons/arrow-down-sign-to-navigate.png';
import   upArrow from '../assets/controlsIcons/up-arrow.png'
 

 const TimerUi=({
    timeInMinutes,
    handleDecrement,
    handleIncrement,
    timeInSeconds,
    handleManualDecrement,
    handleManualIncrement,
    manualMinuteset,
    power,
    breakTimeInMinutes,
    breaktimeInseconds,
    breakManualTimeSet
    

})=>{


    return(

    <div className="ui">
        <div className="diplaymain">
        <div className="maintitle">
            {
                power?  'Break '
                :' session'
            }
            <div className="sessions">
                        {
            !power
                ? `${timeInMinutes < 10 ? '0' : ''}${timeInMinutes}:${timeInSeconds < 10 ? '0' : ''}${timeInSeconds}`
                : `${breakTimeInMinutes < 10 ? '0' : ''}${breakTimeInMinutes}:${breaktimeInseconds < 10 ? '0' : ''}${breaktimeInseconds}`
}

             </div>
             </div>
             </div>
        

             <div className="controls">
             <div className="timercontrols">
              <div className="timeControlsTitle">
                session Length:{manualMinuteset}
              </div>
                <div className="timecontrolsButtons">
                <img src={upArrow} className="increment" onClick={()=>{
                  handleIncrement()
                  handleManualIncrement()
            }} alt="upArrow"></img>
            <img src={downArrow}  alt='down Arrow'  className="decrement" onClick={()=>{
                  handleDecrement()
                  handleManualDecrement()
            }}></img>
         
                </div>
             </div>
             <div className="breakcontrols">
                <div className="breakcontrolsTitle">
                    Break Length:{breakManualTimeSet}
                </div>
               <div className="breakControlButtons">
               <Breakcontainer/>
               </div>
              
             </div>
             </div>
        </div>
           
        
    )
 }

 export default TimerUi