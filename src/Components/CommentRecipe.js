import React from 'react'
export const CommentRecipe = ({filteredComments}) => {
  return (
    <div>
    {filteredComments.map((filteredComment)=>
       <div key={filteredComment._id} >
        <p>{filteredComment.author}</p>
        <p>{filteredComment.comment}</p>
       </div>
    )}
    </div>
  )
}
