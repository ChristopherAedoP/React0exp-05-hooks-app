import React from 'react';
import ReactDOM from 'react-dom';


//import { HookApp } from './HookApp';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
import { TodoApp } from './components/08-useReducer/TodoApp';


ReactDOM.render(

    <TodoApp />,
  
  document.getElementById('root')
);
