import React from "react";
import { StarRating } from "./StarRating";

export const AddComment = ({handleSubmit,changeInputAuthor,changeInputComments,authorInput,commentsInput,changeInputRating,rating})=>{
 
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>Comments</div>
        <div>
            <label>Author</label>
            <input type="text" value={authorInput} onChange={(e)=>{changeInputAuthor(e)}} />
        </div>
        <div>
            <label>Comments</label>
            <input type="text" value={commentsInput} onChange={(e)=>{changeInputComments(e)}} />
        </div>
        <StarRating changeInputRating={changeInputRating} rating={rating}/>
        <div>
            <button>Add comment</button>
        </div>
    </form>
  )
}
