import { useContext } from "react";
import Card from "./Card";
import {PostList as createdposts} from "../Store/post-list-store";

const MakeCard=()=>{
  const {postList}=useContext(createdposts);

  return <>
  {postList.map((post)=>(
    <Card key={post.id} post={post}></Card>
  ))};
  
  </>
}
export default MakeCard