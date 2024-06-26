import React, { useState } from "react"
import Comments from "./Comments"
import Likes from "./Likes"


function About({video}){

    return(
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <h3>{video.views} Views | Uploaded {video.createdAt}</h3>
            <div className="votes">
            <Likes upVotes={video.upvotes} downVotes={video.downvotes}/>
            </div>
            <div>
            <Comments comments={video.comments} />
            </div>
        </div>
    )
}

export default About