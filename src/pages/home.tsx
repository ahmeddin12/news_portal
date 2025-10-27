import type { FC } from "react";
import { Box } from "@mui/material";
import HomeCardsList from "../components/HomeCardsList";
import Carousel from "../components/Carousel";

const Home: FC = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto" }}>
      <Carousel />
      <HomeCardsList />
    </Box>
  );
};
export default Home;
