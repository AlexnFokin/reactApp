import './styles/App.css'
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'post1', body: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'},
    {id: 2, title: 'post2', body: 'loradfasdfsdf lorem lorem lorem lorem lorem lorem'},
    {id: 3, title: 'post3', body: 'lorem ddddddddddlorem lorem lorem lorem lorem'},
    {id: 4, title: 'post4', body: 'qweqweqweqweeqwlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b ) => a[sort].localeCompare(b[sort])))

  }
  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px auto'}} />
      <div>
       <MySelect
         value={selectedSort}
         onChange={sortPosts}
       defaultValue={'sort by'}
       options={[
         {value: 'title', name: 'by Title'},
         {value: 'body', name: 'by Body'}
       ]}
       />
      </div>

      <hr style={{margin: '15px auto'}} />
      {posts.length !== 0
        ? <PostList
          posts={posts}
          remove={removePost}
          title='Post list'/>
        : <h1 style={{textAlign: 'center' }}>Posts not found</h1>
      }

    </div>

  );
}

export default App;
