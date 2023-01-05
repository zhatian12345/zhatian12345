import './App.css'
import Router from './router/index'
import store from './store/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
export default App;
