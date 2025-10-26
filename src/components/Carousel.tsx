import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";

import type { FC } from "react";

const Carousel: FC = () => {
  return (
    <Box>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <HeaderSection />
        <CarouselCard />
        <CarouselList />
      </Box>
    </Box>
  );
};

export default Carousel;
