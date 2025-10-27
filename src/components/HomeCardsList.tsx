import { Box, Card, Typography, CardContent } from "@mui/material";
import HeaderSection from "./HeaderSection";
import type { FC } from "react";
import { categories } from "../utils/constants";

const HomeCardsList: FC = () => {
  return (
    <Box>
      <Box className="mt-4">
        {categories.map((item, ind) => (
          <Box key={ind}>
            <HeaderSection key={ind} title={item} />

            <Box className="grid grid-cols-5 gap-3">
              {[...Array(10)].map((val, ind) => (
                <Card key={ind}>
                  <Box className="bg-red-300 aspect-[16/9] w-full h-[180px]" />
                  <CardContent className="relative ">
                    <Typography className="text-[16px] font-serif line-clamp-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </Typography>
                    <Typography className="text-[14px] font-serif line-clamp-4">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </Typography>

                    <Box className="">
                      <Typography className="text-[14px] font-serif line-clamp-4">
                        Source: ABC NEWS
                      </Typography>
                      <Typography className="text-[14px]   font-serif line-clamp-4">
                        Date: 05/0725
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeCardsList;
