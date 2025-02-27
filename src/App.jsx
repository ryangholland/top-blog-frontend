import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Tags from "./pages/Tags";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/archive" element={<Archive />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
