import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";

import type { FC } from "react";

const Carousel: FC = () => {
  return (
    <Box>
      <HeaderSection title="Top Headlines" />
      <CarouselCard />
      <CarouselList />
    </Box>
  );
};

export default Carousel;
