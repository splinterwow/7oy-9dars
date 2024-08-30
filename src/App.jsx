import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Bookmarks from "./pages/Bookmarks";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
