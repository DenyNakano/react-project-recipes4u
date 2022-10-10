import React, { useState, useEffect } from "react";
import { MdStar } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./CommentRecipe.css";
export const CommentRecipe = ({ filteredComments }) => {
  const [comments, setComments] = useState(0);
  useEffect(() => {
    setComments(filteredComments.length);
  }, [filteredComments])

  const timeNumber = (element)=>{
   return element.toString().length === 1 ? `0${element.toString()}` : element.toString()
  }
  const timeFormat = (time) => {
    return `${timeNumber(time.getDate())}/${timeNumber(time.getMonth() + 1)}/${timeNumber(time.getFullYear())}`;
  };
  /*const timeHour = (hour) => {
    return `${timeNumber(hour.getHours())}:${timeNumber(hour.getMinutes())}`;
  };*/

  return (
    filteredComments.length > 0 && <div id="comments">
      <h2 id="comment-title">
        {comments} {filteredComments.length < 2 ? "comentário" : "comentários"}
      </h2>
      {filteredComments.map((filteredComment, index) => (
        <div key={index} id="comment-profile">
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} >
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",height:70}} >
              <CgProfile size={50} />
              <div>
                <div>
                  <b>{filteredComment.author}</b>
                </div>
                <div>{timeFormat(new Date(filteredComment.created_at))} </div>
              </div>
            </div>
            <p>
              {[...Array(Number(filteredComment.rate))].map((star, index) => (
                <MdStar key={index} color="#ffc107" size={30} />
              ))}
              {[...Array(5 - Number(filteredComment.rate))].map(
                (star, index) => (
                  <MdStar key={index} color="#e4e5e9" size={30} />
                )
              )}
            </p>
          </div>
          <p>{filteredComment.comment}</p>
          {/*<p>{timeHour(new Date(filteredComment.created_at))}</p>*/}
        </div>
      ))}
    </div>
    )
};
