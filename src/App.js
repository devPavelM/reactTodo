import React, {useRef} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = React.useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript язык программирования'},
        {id: 2, title: 'JavaScript 1', body: 'JavaScript язык программирования'},
        {id: 3, title: 'JavaScript 2', body: 'JavaScript язык программирования'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title={'Список постов 1'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
