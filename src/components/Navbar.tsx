import type { FC } from "react";
import {
  Box,
  Typography,
  InputBase,
  Divider,
  ButtonGroup,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { categories } from "../utils/constants";
const Navbar: FC = () => {
  return (
    <Box>
      <Box className="bg-neutral-900 text-white">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: { sm: "90%", xs: "95%" },
            mx: "auto",
            py: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              fontFamily: "sanserif",
              fontSize: "1.5rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "inherit",
                fontWeight: "bold",
              }}
            >
              NEWS
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "inherit",
                fontWeight: "light",
              }}
            >
              Daily
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              bgcolor: "black",
              color: "#c2c2c2",
              px: { sm: 4, xs: 3 },
              borderRadius: "999px",
            }}
          >
            <SearchIcon />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ bgcolor: "gray" }}
            />

            <InputBase
              placeholder="Search"
              sx={{
                color: "white",
                width: { md: "350px", sm: "300px", xs: "180px" },
                height: "2.5rem",
                fontSize: { sm: "1rem", xs: "0.875rem" },
                fontFamily: "serif",
                "&::placeholder": {
                  color: "#646464",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <ButtonGroup
        className="bg-neutral-800 w-full overflow-x-auto rounded-none"
        sx={{
          "& .MuiButton-root": {
            color: "white",
          },
        }}
        variant="text"
      >
        {categories.map((item, ind) => (
          <Button
            key={ind}
            sx={{ fontSize: { md: "16px", sm: "13px", xs: "12px" } }}
            className="min-w-fit w-full hover:bg-neutral-900"
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};
export default Navbar;
