import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {
                posts.map((el, index) => {
                    return <PostItem remove={remove} number={index + 1} key={el.id} post={el}/>
                })
            }
        </div>
    );
};

export default PostList;