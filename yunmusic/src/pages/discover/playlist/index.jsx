import { Provider } from 'react-redux';
import store from './store/store'
import React, { useState, useEffect, useRef } from "react";
import './index.css'
import PlayListCate from './compent/cate/index';
import PlayListIfo from './compent/playlist/index';
import Under from '../../under/index'
const PlayList = () => {
    return (
        <Provider store={store}>
            <div className='yContent'>
                <PlayListCate />
                <PlayListIfo />
            </div>
            <Under/>
        </Provider>

    )
}
export default PlayList