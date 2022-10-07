export const AddComment = ({handleSubmit,changeInputAuthor,changeInputComments,authorInput,commentsInput})=>{
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
        <div>
            <button>Add comment</button>
        </div>
    </form>
  )
}
