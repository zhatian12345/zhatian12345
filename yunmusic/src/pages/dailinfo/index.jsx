import store from './store/store'
import { Provider } from 'react-redux';
import './index.css'
import PlayListDail from './compoent/playlistdail/index'
import SongsDail from './compoent/songdail/index'
import { useLocation  } from "react-router-dom";
import Under from '../under/index'
const DailInfo = () => {
    const location = useLocation().pathname
    if (location === '/playlist') {
        return (
            <Provider store={store}>
                <PlayListDail />
                <Under/>
            </Provider>
        )
    }
    else if(location === '/song'){
        return (
            <Provider store={store}>
                <SongsDail/>
                <Under/>
            </Provider>
        )
    }
}
export default DailInfo