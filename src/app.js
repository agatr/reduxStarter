import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import Students from './components/Students';
import People from './components/People';
import studentsReducer from './reducers/studentsReducer';

const reducers = combineReducers({
  people: studentsReducer
})

const store = createStore(reducers)

class App extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
       <>
        <Students />
        <People />
      </>

     )
   }
 }

 document.addEventListener("DOMContentLoaded", function(){

     ReactDOM.render(
       <Provider store={store}>
         <App />
       </Provider>,
       document.querySelector('#app')
     )

  })
