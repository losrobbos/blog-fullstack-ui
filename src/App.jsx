import { Link, Route, Routes } from "react-router-dom"
import "./App.scss"
import PostView from "./pages/PostView"
import PostList from "./pages/PostList"

console.log({ API_URL: import.meta.env.VITE_API_BASE_URL })

const App = () => {
  // render posts here
  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/">The next blog of all time</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route index element={<PostList />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </main>
      <footer>&copy; 2021 - Rob Blogs Unlimited</footer>
    </div>
  )
}

export default App
