import axios from 'axios';
import React, { useState } from 'react'

export const CommentsForm = ({recipeId}) => {
    const [authorInput,setAuthorInput] = useState('');
    const [commentsInput,setCommentsInput] = useState('');

    const handleSubmit = async (e)=>{
     e.preventDefault()
     const comment ={
        idRecipe: recipeId,
        author: authorInput,
        comment: commentsInput
     }
     try{
        await axios.post('https://ironrest.herokuapp.com/commentsRecipes',comment)
     }catch(error){
        console.log(error)
     }
     setAuthorInput('')
     setCommentsInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>Comments</div>
        <div>
            <label>Author</label>
            <input type="text" value={authorInput} onChange={(e)=>{setAuthorInput(e.target.value)}} />
        </div>
        <div>
            <label>Comments</label>
            <input type="text" value={commentsInput} onChange={(e)=>{setCommentsInput(e.target.value)}} />
        </div>
        <div>
            <button>Add comment</button>
        </div>
    </form>
  )
}
