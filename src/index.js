import React,{Component} from 'react';
import { Provider } from 'react-redux';
import generateStore from './store/configurationStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './components/Todos/Todos'
import registerServiceWorker from './registerServiceWorker';

  ReactDOM.render(
    <Provider store={generateStore()}>
    <Todos/>
    </Provider>
    ,
    document.getElementById('root')
  );
  
 
registerServiceWorker();
