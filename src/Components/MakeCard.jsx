import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import {PostList as createdposts} from "../Store/post-list-store";
import Welcome from "./Welcome";
import Spinner from "./Spinner";

const MakeCard=()=>{
  const {postList,addinitialPosts}=useContext(createdposts);
  const [spinnerval,setspinnerval]=useState(false);

  useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;

    setspinnerval(true);
    fetch("https://dummyjson.com/posts",{signal})
    .then((res)=>res.json())
    .then((data)=>{
      addinitialPosts(data.posts);
      setspinnerval(false);
    });
    return ()=>{
      controller.abort();
    }
  },[]);
 
    
  
  return <>
  {spinnerval && <Spinner/>}
  {!spinnerval && postList.length==0 && <Welcome/>}
  {!spinnerval && postList.map((post)=>(
    <Card key={post.id} post={post}></Card>
  ))};
  
  </>
}
export default MakeCard