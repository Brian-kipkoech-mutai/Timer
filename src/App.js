
import { Provider } from 'react-redux';
import './App.css';
import TimerContainer from './container/timerContainer';
import store from './redux/store';
  
function App() {  
  return (
     <div>
       <Provider store={store}>
       <TimerContainer/>
       </Provider>
      
     </div>
  );
}

export default App;
