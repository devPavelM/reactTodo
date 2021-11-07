import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const {post} = props
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{`${props.number}. ${post.title}`}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton
                onClick={()=> props.remove(props.post)}
                >Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;