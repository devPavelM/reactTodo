import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type='text'
                placeholder='Название поста'/>
            {/*Неуправляемый компонент*/}
            <MyInput
                // ref={bodyInputRef}
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type='text'
                placeholder='Описание поста'/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;