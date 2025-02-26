import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />}></Route>
          {/* <Route path="/archive" element={<Archive />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
