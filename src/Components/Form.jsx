import { useContext, useRef } from "react"
import { PostList } from "../Store/post-list-store";

function Form(){

  const {addPost}=useContext(PostList);

  const useridEle=useRef();
  const posttitleEle=useRef();
  const postbodyEle=useRef();
  const reactionsEle=useRef();
  const tagsEle=useRef();

  const handelsubmit=(event)=>{
    event.preventDefault();
    const userid=useridEle.current.value;
    const posttitle=posttitleEle.current.value;
    const postbody=postbodyEle.current.value;
    const reactions=reactionsEle.current.value;
    const tags=tagsEle.current.value.split(" ");

    useridEle.current.value="";
    posttitleEle.current.value="";
    postbodyEle.current.value="";
    reactionsEle.current.value="";
    tagsEle.current.value="";
    addPost(userid,posttitle,postbody,reactions,tags);
  }

  return <form className="create-post" onSubmit={handelsubmit}>
  <div className="mb-4">
    <label htmlFor="userId" className="form-label">Enter your userId</label>
    <input type="text" ref={useridEle} className="form-control" id="userId" placeholder="your userId"/>
  </div>
  <div className="mb-4">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={posttitleEle}  className="form-control" id="title" placeholder="How are you feeling today..."/>
  </div>
  <div className="mb-4">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows="4" ref={postbodyEle}  type="text" className="form-control" id="body" placeholder="Tell people more about it."/>
  </div>
  <div className="mb-4">
    <label htmlFor="reactions" className="form-label">Post Reactions</label>
    <input type="number" ref={reactionsEle}  className="form-control" id="reactions" placeholder="Enter no of reactions"/>
  </div>
  <div className="mb-4">
    <label htmlFor="hashtags" className="form-label">Post HashTags</label>
    <input type="text" ref={tagsEle}  className="form-control" id="hashtags" placeholder="Enter HashTags"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
}
export default Form