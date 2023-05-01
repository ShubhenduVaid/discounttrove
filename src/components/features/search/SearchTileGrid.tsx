import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

import { SearchTile, SearchTileProps } from "@src/components/features/search";

interface SearchTileGridProps {
  products: Array<SearchTileProps | undefined>;
}

export const SearchTileGrid = ({ products }: SearchTileGridProps) => {
  return (
    <Container>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        rowGap={{ base: 2, lg: 6 }}
        columnGap={{ base: 2, lg: 6 }}
      >
        {products?.map((product, index) => {
          return (
            <GridItem key={index}>
              {product ? <SearchTile {...product} /> : null}
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
