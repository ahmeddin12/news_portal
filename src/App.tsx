import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Carousel from "./components/Carousel";
import { categories } from "./utils/constants";
import HomeCardsList from "./components/HomeCardsList";

import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Search from "./pages/Search";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Box sx={{ width: "90%", mx: "auto" }}>
              <Carousel />
              <Box className="mt-4 mb-24">
                <Box>
                  {categories.map((item: string, ind: number) => (
                    <HomeCardsList key={ind} category={item} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Route>
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
