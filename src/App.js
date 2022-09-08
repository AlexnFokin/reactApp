import './styles/App.css'
import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/Loader/MyLoader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";


function App() {

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState('false')
  const [totalPages, settotalPages] = useState(0)
  const [limit, setLimit] =useState(10)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page ) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    settotalPages(getPageCount(totalCount, limit))
  })

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)

  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal('false')
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='App'>
      <MyButton
        onClick={() => setModal('true')}
      >
        Create new post
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}

      >
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <hr style={{margin: '15px auto'}}/>
      {postError &&
      <h1>Error ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
        :
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title='Post list'
        />
      }
      <div className="page__wrapper">
      {
        pagesArray.map(p=>

          <span
            onClick={() => {changePage(p)}}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )
      }
      </div>
    </div>

  );
}

export default App;
