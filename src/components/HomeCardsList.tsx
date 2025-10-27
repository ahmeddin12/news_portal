import { Box } from "@mui/material";

import type { FC } from "react";
import { categories } from "../utils/constants";
import NewsCardList from "./NewsCardList";
import HeaderSection from "./HeaderSection";
const HomeCardsList: FC = () => {
  return (
    <Box>
      <Box className="mt-4">
        <Box>
          {categories.map((item, ind) => (
            <Box>
              <HeaderSection title={item} />
              <NewsCardList />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCardsList;
