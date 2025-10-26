import type { FC } from "react";
import Grid2 from "@mui/material/Grid";

import { Box, Typography, Card } from "@mui/material";

const CarouselList: FC = () => {
  return (
    <Box className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8">
      {[...Array(4)].map((item, ind) => (
        <Grid2 key={ind}>
          <Card className="relative">
            <Box className="bg-red-300 w-full aspect-[16/10]"></Box>
            <Box
              className="_carouselGradient"
              sx={{
                position: "absolute",
                bottom: 0,
                height: "70px",
                width: "100%",
              }}
            />
            <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </Typography>
          </Card>
        </Grid2>
      ))}
    </Box>
  );
};
export default CarouselList;
