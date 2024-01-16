import Breakcontainer from "../container/breakcontainer"
import downArrow from '../assets/minus.png';
import upArrow from '../assets/new.png'
import play from '../assets/controlsIcons/play (1).png'
import pause from  '../assets/controlsIcons/pause (1).png'
import reset from '../assets/controlsIcons/rotate.png'
import { Badge } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import alarm from '../assets/audios/mixkit-marimba-waiting-ringtone-1360.wav'



 
 

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
    breakManualTimeSet,
    handlePause,
    handlePlay,
    handleReset,
    active,
    alarmRef,
    show,
    setShow,
    endAlarm
    
    

})=>{

  
   
  
    return(

    <div className="ui">
       <audio  id="beep" ref={alarmRef} src={alarm} style={{display:'none'}}></audio>
        <div className="diplaymain">
        <div className={`maintitle ${power ? 'break-state' : 'session-state'}`} id="timer-label">
                  {
            power ?  <span >Break <FontAwesomeIcon icon={ faBottleWater} /></span> : <span >Session <FontAwesomeIcon icon={faClock} /></span>
          }
           </div>
            <div className="sessions"  id="time-left">
                        {
            !power
                ? `${timeInMinutes < 10 ? '0' : ''}${timeInMinutes}:${timeInSeconds < 10 ? '0' : ''}${timeInSeconds}`
                : `${breakTimeInMinutes < 10 ? '0' : ''}${breakTimeInMinutes}:${breaktimeInseconds < 10 ? '0' : ''}${breaktimeInseconds}`
}

             </div>
              
             </div>
        

             <div className="controls">
             <div className="timercontrols">
              <div  className="timeControlsTitle"  >
              
              <div id="session-label">Session Length</div>
               <Badge id="session-length" bg="secondary">{manualMinuteset}</Badge>
              
                
              </div >
                <div className="timecontrolsButtons"   >
                <img id="session-increment" src={upArrow} className="increment"  onClick={()=>{
                  !active&&handleIncrement()
                  !active&&handleManualIncrement()
            }} alt="upArrow"
               
               ></img>
            <img id="session-decrement" src={downArrow}  alt='down Arrow'  className="decrement" onClick={()=>{
                 !active&& handleDecrement()
                 !active&& handleManualDecrement()
            }}></img>
         
                </div>
             </div>
             <div className="breakcontrols">
                <div  className="breakcontrolsTitle" >
                 
                   <div id="break-label">Break Length</div>
                   <Badge  bg="secondary" id="break-length">{breakManualTimeSet}</Badge>
                </div>
               <div className="breakControlButtons">
               <Breakcontainer/>
               </div>
              
             </div>
             </div>
             <hr style={{ borderColor:'black',width:'100%',borderWidth:'1px'}}/>
             <div className="generalControls">
                <div className="generalControlsButtons">
                <div><img id="start_stop" src={active?pause:play} alt="play Button"  className="controlsButtons"
                     onClick={()=>{
                      handlePlay(!active)
                     } }
                 /></div>
               
               <div><img id="reset" src={reset} alt="reset Button" className="controlsButtons" 
                    onClick={()=>{
                      handleReset()
                      setShow(false)
                      endAlarm()
                    }}
               /></div>
                </div>
                       <div id="developer"> Designed and coded  by : <a href="https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D">Brian kipkoech</a></div>

             </div>
             
             <div className="alert-container position-fixed bottom-0 end-0">
             <Alert show={show} variant="success">
        <Alert.Heading>Alarm <FontAwesomeIcon icon={faBell} /></Alert.Heading>
        <h2>Timer done</h2>
        <p>{`${manualMinuteset} min` }</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() =>  {
            setShow(false)
             endAlarm()
          }} variant="outline-success" style={{width:'100%'}}>
            Dismiss
          </Button>
        </div>
      </Alert>
</div>


        </div>
           
        
    )
 }

 export default TimerUi