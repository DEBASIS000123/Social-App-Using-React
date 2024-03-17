import { MdCancel } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { PostList } from "../Store/post-list-store";

const Card=({post})=>{
const {deletePost}=useContext(PostList);

  return <div className="card cardstyle" style={{width:"auto"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletebtn" onClick={()=>deletePost(post.id)}>
    <MdCancel />
    </span>
    <p className="card-text">{post.body}</p>
    {post.hashtags.map((hashtag)=>(
      <span key={hashtag+1} className="badge text-bg-primary hashtag">{hashtag}</span>
    ))}
    <br></br>
    <button type="button" className="btn btn-outline-primary liked"><FcLike /> {post.reactions}</button>
  </div>
</div>
}

export default Card