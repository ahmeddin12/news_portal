import { Box, Typography, Button } from "@mui/material";

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
    </Box>
  );
};
export default Home;
