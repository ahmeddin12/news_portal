import { Box, Typography, Button, Card } from "@mui/material";

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
      </Card>
    </Box>
  );
};
export default Home;
