import React, { useState } from "react"
import CommentCard from "./CommentCard"

function Comments({comments}){

    const [show, setShow] = useState(true)

    const numCom = comments.length

    let commentsRender = comments.map(comment=>{
        return <CommentCard key={comment.id} user={comment.user} comment={comment.comment}/>
    })


    return(

        <div className="comments">

        <button onClick={()=> setShow(!show)}> {show ? "Show Comments" : "Hide Comments"} </button>

        {show ? 
            <div> 
                <h2>{numCom} Comments</h2>
                    <ul>
                    {commentsRender}
                    </ul>
            </div>: 
            <></>
        }
        </div>
    )
}

export default Comments