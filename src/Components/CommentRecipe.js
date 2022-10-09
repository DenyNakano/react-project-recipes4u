import React from 'react'
import { MdStar } from "react-icons/md";
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
        <p>
        {[...Array(Number(filteredComment.rate))].map((star) => 
                    
                    <MdStar
                
                      color="#ffc107"
                      size={50}
                />)}
                  {[...Array(5-Number(filteredComment.rate))].map((star) => 
                    <MdStar
                      
                      color="#e4e5e9"
                      size={50}

                  />)}
        </p>
        <p>data:{timeFormat(new Date(filteredComment.created_at))}</p>
        <p>horário:{timeHour(new Date(filteredComment.created_at))}</p>
       
       </div>

    )}
    </div>
  )
}
