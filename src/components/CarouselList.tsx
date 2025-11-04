import type { FC } from "react";
import Grid2 from "@mui/material/Grid";

import type { NewsType } from "../utils/Types";

import { Box, Typography, Card, CardMedia } from "@mui/material";

interface CarouselListProps {
  topHeadlines: NewsType[];
  active: number;
}

const CarouselList: FC<CarouselListProps> = ({ topHeadlines, active }) => {
  const getNextFive = (active: number, topHeadline: NewsType[]) => {
    const nextFive = [];
    for (let i = 0; i < 5; i++) {
      const index = (active + i + 1) % topHeadline.length;
      nextFive.push(index);
    }
    return nextFive;
  };

  const nextFiveHeadlines = getNextFive(active, topHeadlines);
  console.log(getNextFive(active, topHeadlines));
  return (
    <Box className="grid grid-cols-5 gap-3 mt-8">
      {nextFiveHeadlines.map((item, ind) => (
        <Grid2 key={ind}>
          <Card className="relative">
            <CardMedia
              component="img"
              className="w-full aspect-[16/10]"
              image={topHeadlines[item]?.urlToImage}
            ></CardMedia>
            <Box
              className="_carouselGradient"
              sx={{
                position: "absolute",
                bottom: 0,
                height: "70px",
                width: "100%",
              }}
            />
            <Typography
              sx={{ fontFamily: "serif" }}
              className="absolute bottom-2 text-white text-[17px] line-clamp-3 px-3"
            >
              {topHeadlines[item]?.title}
            </Typography>
          </Card>
        </Grid2>
      ))}
    </Box>
  );
};
export default CarouselList;
