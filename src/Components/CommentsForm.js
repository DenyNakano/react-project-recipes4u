import React from 'react'

export const CommentsForm = () => {
  return (
    <form>
        <div>
            <label>Author</label>
            <input type="text"/>
        </div>
        <div>
            <label>Comments</label>
            <input type="text"/>
        </div>
        <div>
            <label>Rate</label>
            <input type="number"/>
        </div>
    </form>
  )
}
