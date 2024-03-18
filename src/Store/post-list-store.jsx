import { createContext, useReducer } from "react";


export const PostList=createContext({
  postList:[],addPost:()=>{},deletePost:()=>{},addinitialPosts:()=>{},
});

const postListReducer=(currpostlist,action)=>{
  let newpostlist=currpostlist;
  if(action.type==="DELETE_POST"){
    newpostlist=currpostlist.filter(post=>post.id!==action.payload.postid);
  }
  else if(action.type==="ADD_POST"){
    newpostlist=[action.payload,...currpostlist];
  }
  else if(action.type==="ADD_INITIAL_POST"){
    newpostlist=action.payload.posts;
  }
  return newpostlist;
};

const PostListProvider=({children})=>{
 const [postList,dispatchpostlist]=useReducer(postListReducer,[]);

 const addPost=(userid,posttitle,postbody,reactions,tags)=>{
  dispatchpostlist({
    type:"ADD_POST",
    payload:{
      id:Date.now(),
    title:posttitle,
    body:postbody,
     reactions:reactions,
    hashtags:tags,
    userId:userid,
    },
  })
 };

 const addinitialPosts=(posts)=>{
  dispatchpostlist({
    type:"ADD_INITIAL_POST",
    payload:{
      posts
    },
  })
 };


 const deletePost=(postid)=>{
  dispatchpostlist({
    type: "DELETE_POST",
    payload:{
      postid,
    },
  });
 };



  return <PostList.Provider value={{postList,addPost,deletePost,addinitialPosts}} >
    {children}
  </PostList.Provider>
}

export default PostListProvider