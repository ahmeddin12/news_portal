import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
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
  );
};

export default HeaderSection;
