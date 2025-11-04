import { Box, Card, Skeleton } from "@mui/material";
import Grid2 from "@mui/material/Grid";

import type { FC } from "react";

const CarouselListSkeleton: FC = () => {
  return (
    <Box className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8">
      {[...Array(5)].map((item, ind) => (
        <Grid2 key={ind}>
          <Card className="relative">
            <Skeleton variant="rectangular" width={"100%"}>
              <Box className="aspect-[16/10]"></Box>
            </Skeleton>
          </Card>
        </Grid2>
      ))}
    </Box>
  );
};

export default CarouselListSkeleton;
