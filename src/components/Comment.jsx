const Comment = ( { comment, index = 0 } ) => {
  return ( 
    <div key={comment._id} className="comment-card">
      <div className="avatar">
        <img alt="avatar" src={`https://source.unsplash.com/50x50/?avatar,${index}`} />
      </div>
      <div className="body">
        <div className="author">
          { comment.author }
        </div>
        <div className="date">
          { comment.createdAt }
        </div>
        <div className="text">
          { comment.text }
        </div>
        <div className="reply">
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
}
 
export default Comment;