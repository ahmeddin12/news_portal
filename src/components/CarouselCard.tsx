import type { FC } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import type { NewsType } from "../utils/Types";

interface CarouselCardType {
  topHeadline: NewsType;
}

const CarouselCard: FC<CarouselCardType> = ({ topHeadline }) => {
  return (
    <Card className="grid grid-cols-2 border-1 shadow-none">
      <Box className="relative h-[360px]">
        <CardMedia
          component="img"
          className="h-full"
          image={topHeadline?.urlToImage}
        ></CardMedia>
        <Box
          className="_carouselGradient"
          sx={{
            position: "absolute",
            bottom: 0,
            height: "70px",
            width: "100%",
          }}
        ></Box>
        <Typography
          sx={{ fontFamily: "serif" }}
          className="absolute bottom-2 text-white text-[22px] leading-8 line-clamp-3 px-6"
        >
          {topHeadline?.title}
        </Typography>
      </Box>
      <CardContent className="relative ">
        <Typography gutterBottom className="text-xl  font-serif line-clamp-4">
          {topHeadline?.description}
        </Typography>
        <Typography className="text-lg font-serif line-clamp-4">
          {topHeadline?.content}
        </Typography>

        <Box className="md:absolute bottom-2">
          <Typography className="text-lg font-serif line-clamp-4">
            Source: {topHeadline?.source?.name}
          </Typography>
          <Typography className="text-lg font-serif line-clamp-4">
            Date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CarouselCard;
