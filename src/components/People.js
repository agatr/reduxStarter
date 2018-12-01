import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class People extends React.Component {
   constructor(props) {
   super(props);

   this.handleClick = this.handleClick.bind(this)

   }

   handleClick() {
    this.props.addStudent(this.input.value)
   }



   render(){

     if(!this.props.students) {
       return null;
     }

    let students = this.props.students.map((e,i) => {
      return <li key={i}>{e}</li>
    })

     return (
      <ul>
        {students}
        <input ref={e => this.input = e} type="text"/>
        <button onClick={this.handleClick}>Add</button>
      </ul>

     )
   }
 }

 function mapStateToProps(store) {
   return {
     students: store.people
   }
 }

 function mapDispatchToProps(dispatch) {
   return {
    addStudent: student => {
      dispatch({ type: 'ADD_STUDENT', payload: student })
    }
  }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(People);
