import React, { useEffect, useState } from 'react'
import AddTweet from "./AddTweet";
import AddtweetContainer from "./AddtweetContainer"
import "./AddTweetSection.css"
import { useNavigate } from 'react-router-dom';
const localGetItom = () => {
  let x = localStorage.getItem("tweet")
  if (x) {
    return JSON.parse(localStorage.getItem("tweet"));
  } else {
    return [];
  }
}

function AddTweetSection({ check }) {
  const [data, setData] = useState(localGetItom())
  const [tweetMsg, setTweetMsg] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [commentInputMsg, setCommentInputMsg] = useState("")
  const [tweetComent, setTweetComent] = useState([])
  const [commentInput, setCommentInput] = useState(false)
  const Navigate = useNavigate()
  const tweet = () => {
    if (tweetMsg === "") {
    } else if (check.email === "") {
      alert("You Should first Login")
      return Navigate("./Login")
    }
    else {

      setData([...data, { id: new Date().getTime().toString(), tweet: tweetMsg, img: imageUrl, toggle: commentInput, commentMsg: commentInputMsg }])
      setTweetMsg("")
    }
  }

  const deleteTweet = (tweet) => {
    let deleteTweeetValye = data.filter((item) => item.id !== tweet.id)
    setData(deleteTweeetValye)
  }

  const Commentvalue = (item) => {
    setCommentInput(!commentInput)
    setData(
      data.map((value) => {
        if (item.id === value.id) {
          return { ...value, toggle: commentInput }
        }
        return value;
      })
    )
  }

  const commentPost = (item) => {
    setData(
      data.map((val) => {
        if (item.id === val.id) {
          return { ...val, commentMsg: commentInputMsg }
        }
        return val
      })
    )

  }

  useEffect(() => {

    localStorage.setItem("tweet", JSON.stringify(data))
  }, [data, tweetMsg])
  return (
    <div className='AddTweetSection_container'>
      <AddtweetContainer setTweetMsg={setTweetMsg} tweetMsg={tweetMsg} tweet={tweet} setImageUrl={setImageUrl} />

      <AddTweet tweetMsg={tweetMsg} setTweetMsg={setTweetMsg} data={data} deleteTweet={deleteTweet}
        imageUrl={imageUrl} Commentvalue={Commentvalue} setCommentInput={setCommentInput} commentInput={commentInput} setCommentInputMsg={setCommentInputMsg}
        commentPost={commentPost} setTweetComent={setTweetComent} tweetComent={tweetComent} commentInputMsg={commentInputMsg}
      />

    </div>
  )
}

export default AddTweetSection
