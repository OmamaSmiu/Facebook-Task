import React from "react";
import ReactDOM from "react-dom";
import Facebook from './Facebook';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function Hi() {
  const [handle, sethandle] = useState({name: "", profile:"",text:"",img:""});
  const [posts, setposts] = useState([])


  const postContent = () => {
    setposts([...posts,handle])
    sethandle({name:"",profile:"",img:""})

  }

  return <div className="mainCard">
  <div class="card">
    <h2 className="postHeading">Facebook Post</h2>
    <div className="input-container">
    <label className="postLabel">UserName</label>
    <input type="text" value={handle.name} onChange={e => sethandle({...handle,name:e.target.value})} className="input1" placeholder="Enter your Name"></input>
    </div>
    <div className="input-container">
    <label className="postLabel">ProfileImage</label>
    <input type="text" value={handle.profile} onChange={e => sethandle({...handle,profile:e.target.value})} className="input2" placeholder="Paste profile image link here"></input>
    </div>
    <div className="input-container">
    <label className="postLabel">Text</label>
    <input type="text" value={handle.text} onChange={e => sethandle({...handle,text:e.target.value})} className="input3" placeholder="Enter text here"></input>
    </div>
    <div className="input-container">
    <label className="postLabel">Post</label>
    <input type="text" value={handle.img} onChange={e => sethandle({...handle,img:e.target.value})} className="input4" placeholder="Paste your post link here"></input>
    </div>
    <button  onClick={postContent} type="button" class="btn btn-danger" className="postBtn">Post</button>
    {posts.map(data=> <Facebook data={data}/>)}
  </div>
  </div>
}

ReactDOM.render(<Hi />, document.getElementById('root'))

export default Facebook;