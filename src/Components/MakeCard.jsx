import { useContext } from "react";
import Card from "./Card";
import {PostList as createdposts} from "../Store/post-list-store";
import Welcome from "./Welcome";

const MakeCard=()=>{
  const {postList,addinitialPosts}=useContext(createdposts);

  const Welcomebtnclicked=()=>{
    fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then((data)=>{addinitialPosts(data.posts)});
  }
  return <>
  {postList.length==0 && <Welcome Welcomebtnclicked={Welcomebtnclicked}/>}
  {postList.map((post)=>(
    <Card key={post.id} post={post}></Card>
  ))};
  
  </>
}
export default MakeCard