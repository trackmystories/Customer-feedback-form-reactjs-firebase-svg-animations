import React, {Component} from 'react'
import './App.css'
import CommentForm from './components/CommentForm'
import MainSvg from './components/MainSvg'
import CommentsTab from './components/CommentsTab'


export default class App extends Component{



  render(){
  return(

    <main>


    <div className="page">

    <div className='block-1'>
    <CommentForm />
    </div>

    <div className='block-2'>
    <MainSvg />
    </div>

    </div>

    <div className='block-3'>
    <CommentsTab />
    </div>

    </main>
  )}
}
