
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {

  

  return (
    <div className="App">
     <Provider store={store}>
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
     </Provider>
      
    </div>
  );
}

export default App;

