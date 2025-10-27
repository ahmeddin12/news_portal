import { Box, Card, Typography, CardContent } from "@mui/material";

import type { FC } from "react";

const NewsCardList: FC = () => {
  return (
    <Box className="grid grid-cols-5 gap-3">
      {[...Array(5)].map((val, ind) => (
        <Card key={ind}>
          <Box className="bg-red-300 aspect-[16/9] w-full h-[180px]" />
          <CardContent className="relative ">
            <Typography className="text-[16px] font-serif line-clamp-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </Typography>
            <Typography className="text-[14px] font-serif line-clamp-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </Typography>

            <Box className="">
              <Typography className="text-[14px] font-serif line-clamp-4">
                Source: ABC NEWS
              </Typography>
              <Typography className="text-[14px] font-serif line-clamp-4">
                Date: 05/0725
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NewsCardList;
