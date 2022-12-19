import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  // DUMMY DATA APPROACH => mirror same structure as on backend routes in your context
  const [posts, setPosts] = useState(
    [
      {
        _id: "6171303cb58a952fac73f588",
        title: "Yadda Yadda",
        author: "Rob",
        text: "Yay, title says it all. Dolores esse sit aut modi molestiae non. Porro non amet ea eveniet fugiat magni. Beatae pariatur eaque labore qui. Nulla dignissimos ea quis sit dolor. Eaque et accusamus incidunt perspiciatis cum ipsam dicta.",
        stats: {
          likes: 3,
          dislikes: 0,
        },
        createdAt: "2021-10-21T09:17:48.739Z",
        updatedAt: "2021-10-21T09:17:48.739Z",
      },
      {
        _id: "6171303cb58a952fac73f58a",
        title: "Backend? WTF?",
        author: "Giorgio",
        text: "I stay in the UI. Voluptatibus et et est. Est magni autem eaque cum qui consequuntur dolorem. Et et assumenda. Voluptatibus perferendis vel. Ut aut et.",
        stats: {
          likes: 2,
          dislikes: 2,
        },
        createdAt: "2021-10-21T09:17:48.741Z",
        updatedAt: "2021-10-21T09:17:48.741Z",
      },
    ]
  )

  useEffect(() => {
    if (!import.meta.env.VITE_API_BASE_URL) {
      console.log("WARNING: No API URL is set!")
      console.log("Please provide a URL to an API by creating an .env file")
      console.log("Easiest: Copy the .env.sample file to .env and replace the URL")
      return
    }
    // grab posts from posts API route and stuff it into our local state
    fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`)
      .then((res) => res.json())
      .then((postsApi) => {
        setPosts(postsApi)
      })
  }, []) // just load posts on FIRST RENDER

  const addPost = (postNew) => {
    setPosts([...posts, postNew])
  }
  const updatePost = (postUpdated) => {
    setPosts(
      posts.map((post) =>
        post._id === postUpdated._id ? { ...postUpdated } : post
      )
    )
  }
  const deletePost = (postToDelete) => {
    setPosts(posts.filter((post) => post._id !== postToDelete._id))
  }

  const sharedData = {
    posts,
    setPosts,
    addPost,
    updatePost,
    deletePost,
  }

  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  )
}

export default DataProvider
