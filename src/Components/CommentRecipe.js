import React from 'react'
export const CommentRecipe = ({filteredComments}) => {
const timeFormat = (time) =>{
    return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
  }
  const timeHour = (hour)=>{
    return `${hour.getHours()}:${hour.getMinutes()}:00`
  }
  return (
    <div>
    {filteredComments.map((filteredComment)=>
       <div key={filteredComment._id} >
        <p>Autor :{filteredComment.author}</p>
        <p>comment: {filteredComment.comment}</p>
        <p>data:{timeFormat(new Date(filteredComment.created_at))}</p>
        <p>horário:{timeHour(new Date(filteredComment.created_at))}</p>
       </div>

    )}
    </div>
  )
}
