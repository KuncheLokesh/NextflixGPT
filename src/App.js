
import './App.css';
import Body from './components/Body';
import { Provider, useDispatch } from 'react-redux';
import  Appstroe, {} from "./uitls/AppStore"

function App() {
  // const auth = getAuth();
  
  return (
    <Provider store={Appstroe}>
    <Body/>
    </Provider>
  );
}

export default App;
