import React from 'react'
import '../App.css'
import Title from './Title'

import { firebaseConfig } from '../api/config'
import * as firebase from 'firebase/app'
import "firebase/firestore"



class CommentForm extends React.Component {
  constructor(props){
  super(props);
  this.state={
    name:'',
    email:'',
    comment: ''
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  }


  handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
}


handleSubmit(e) {
  e.preventDefault();

  const itemsRef = firebase.firestore().collection('Comment');
  const item = {
    name: this.state.name,
    email: this.state.email,
    comment: this.state.comment,
    date: Date()
  }
  itemsRef.add(item);
  this.setState({
    name: '',
    email: '',
    comment: '',
    date: '',
  });
}


formatDate(date) {
  return date.toLocaleDateString();
}

 render(){
   return(
     <form className="center" onSubmit={this.handleSubmit}>
    <Title title="Customer Feedbacks below" />
     <input type="text"  name="name" placeholder='name'      onChange={this.handleChange}/>
     <br/>
     <input type="text"  name="email" placeholder='email'     onChange={this.handleChange}/>
     <br/>
     <input  type="text" name="comment" placeholder='comment'   onChange={this.handleChange}/>
     <br/>
     <button type="submit" className='button' onSubmit={() => this.writeUserData(this.state.name, this.state.email, this.state.comment, this.state.date)}><span>Submit </span></button>
     </form>
   )
  }
 }


 export default CommentForm;
