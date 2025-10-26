import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Grid";

import type { FC } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home: FC = () => {
  return (
    <Box sx={{ width: "90%", mx: "auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Typography
          sx={{ fontSize: "2.5rem", fontFamily: "serif", cursor: "pointer" }}
        >
          Top Headlines
        </Typography>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "black",
            "&:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            },
          }}
        />
        See All
        <ArrowForwardIcon sx={{ fontSize: "1.25rem" }} />
      </Box>
      <Card className="grid grid-cols-2">
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
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Typography>
          <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          <Box className="md:absolute bottom-2">
            <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
              Source: ABC NEWS
            </Typography>
            <Typography className="sm:text-xl text-lg font-serif line-clamp-4">
              Date: 01/04/25
            </Typography>
          </Box>
        </CardContent>
      </Card>

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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Card>
          </Grid2>
        ))}
      </Box>
    </Box>
  );
};
export default Home;
