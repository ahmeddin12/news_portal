import type { FC } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const CarouselCard: FC = () => {
  return (
    <Card className="grid grid-cols-2 border-1 shadow-none">
      <Box className="relative h-[360px]">
        <Box className="bg-red-300 h-full"></Box>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      <CardContent className="relative ">
        <Typography
          gutterBottom
          className="sm:text-xl text-lg font-serif line-clamp-4"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
        <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
          asdfghjklqwertyuizxcvbnm,
        </Typography>

        <Box className="md:absolute bottom-2">
          <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
            Source: ABC NEWS
          </Typography>
          <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
            Date: 05/07/25
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CarouselCard;
