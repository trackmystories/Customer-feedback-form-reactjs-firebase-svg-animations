import React, {Component} from 'react'
import '../App.css'

import "firebase/firestore"
import * as firebase from 'firebase';
import { firebaseConfig } from '../api/config'



export default class CommentsTab extends Component {

  constructor(props) {
  super(props);
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  this.ref = firebase.firestore().collection('Comment').orderBy('date', 'desc').limit(10);
  this.state={
  dataSource : []
}
}

componentDidMount(){
  this.unsubscribe = this.ref.onSnapshot(this.latestComments);
}



latestComments = (commentsSnapShot) =>{
  const Comment = [];
  commentsSnapShot.forEach((doc) => {
  const {name, email, date, comment} = doc.data();
    Comment.push({
      key: doc.id,
      name,
      email,
      date,
      comment
    });
  });
  this.setState({
    dataSource : Comment,
  });
}




  render(){
     const {dataSource} = this.state
    return(
      <div>
      <h1>Comments: </h1>
      <ul>
        {dataSource.map(item =>

          <p className="size" key={item.email}>Posted by : { item.name} <br/>
          At : {item.date}<br/>
          Post : {item.comment}
          </p>

        )}
      </ul>
<p style={{size: 8}}>please note that in this section posts are visible to 10 inputs only.</p>
      </div>
    )
  }
}
