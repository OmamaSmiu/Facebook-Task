import React from "react";
import './Facebook.css';

function Facebook(props) {
    // let today = new date();
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return <div>
        <div className="card promoting-card" id="mainCard">
            <div className="card-body d-flex flex-row">
                <img src={props.data.profile} id="Profile" alt="avatar" />
                <div>
                    <p className="profileName">{props.data.name}</p>
                    {/* <p className="card-text  text-white"><i className="far fa-clock pr-2" />{date}</p> */}
                </div>
            </div>
            <div>
                <h4 className="postText" >{props.data.text}</h4>
                <img src={props.data.img} alt="Card image cap" id="Image" />
                <a href="#!">
                </a>
            </div>
            <div className="MianBtn">
                <button className="Btn1">Like</button>
                <button className="Btn2">Comments</button>
                <button className="Btn3">Share</button>

            </div>
        </div>

    </div>

}


export default Facebook;