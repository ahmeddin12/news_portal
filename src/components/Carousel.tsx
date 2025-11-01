import { useState } from "react";
import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";
import axios from "axios";

import { useEffect, type FC } from "react";
import type { NewsType } from "../utils/Types";

const Carousel: FC = () => {
  const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([]);
  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d489c3a3f96c4a91a16ce78d50b8ac03"
      );
      console.log(response.data.articles[0]);
      const filterHeadlines = response?.data?.articles.filter(
        (res: NewsType) => res.urlToImage != null
      );

      setTopHeadlines(filterHeadlines);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTopHeadlines();
  }, []);
  return (
    <Box>
      <HeaderSection title="Top Headlines" />
      <CarouselCard topHeadline={topHeadlines[0]} />
      <CarouselList topHeadlines={topHeadlines} />
    </Box>
  );
};

export default Carousel;
