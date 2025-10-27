import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import type { FC } from "react";

interface HeaderSectionProps {
  title: string;
}

const HeaderSection: FC<HeaderSectionProps> = ({ title }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
      <Typography
        sx={{ fontSize: "2.5rem", fontFamily: "serif", cursor: "pointer" }}
      >
        {title}
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
