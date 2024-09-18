import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/" element={<Blogs />} />
              <Route path="/create" element={<CreateBlog />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
