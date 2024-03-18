import { createContext, useReducer } from "react";


export const PostList=createContext({
  postList:[],addPost:()=>{},deletePost:()=>{},
});

const postListReducer=(currpostlist,action)=>{
  let newpostlist=currpostlist;
  if(action.type==="DELETE_POST"){
    newpostlist=currpostlist.filter(post=>post.id!==action.payload.postid);
  }
  else if(action.type==="ADD_POST"){
    newpostlist=[action.payload,...currpostlist];
  }
  return newpostlist;
};

const PostListProvider=({children})=>{
 const [postList,dispatchpostlist]=useReducer(postListReducer,DEFAULT_POST);

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


 const deletePost=(postid)=>{
  dispatchpostlist({
    type: "DELETE_POST",
    payload:{
      postid,
    },
  });
 };



  return <PostList.Provider value={{postList,addPost,deletePost}} >
    {children}
  </PostList.Provider>
}
let DEFAULT_POST=[{
  id:"1",
  title:"Going to Mumai",
  body:"Hi Friends , I am going to mumbai for my vacations. Hope to enjoy a lot. Peace out.",
  reactions:2,
  hashtags:["#Mumbai","#vacation","#Enjoy"],
  userId:"user-1"
},
{
  id:"2",
  title:"Finally Graduated",
  body:"Hi Friends , I am finally graduated by wasting 4 years. Don't do engineering.",
  reactions:15,
  hashtags:["#Graduated","#Happy","#Mood"],
  userId:"user-2"
}
];
export default PostListProvider