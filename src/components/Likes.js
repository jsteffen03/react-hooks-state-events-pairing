import React, { useState } from "react"

function Likes({upVotes, downVotes}){
    const [likes, setLikes] = useState(upVotes)

    const [dislikes, setDislikes] = useState(downVotes)

    function handleLikes(){
        setLikes (likes + 1)
    }

    function handleDislikes(){
        setDislikes (dislikes + 1)
    }

    return(
        <>
        <button onClick={handleLikes}>{likes} 👍 </button> <button onClick={handleDislikes}>{dislikes} 👎 </button>
        </>
    )
}

export default Likes