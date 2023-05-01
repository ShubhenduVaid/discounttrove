import {
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  GridItem,
  Container,
  Button,
  Box,
  useBoolean,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { MdImageSearch, MdSearch } from "react-icons/md";
import { SearchTileGrid, SearchLoader } from "@src/components/features/search";

interface SearchBarProps {
  imageUrl?: string;
  price?: string;
}

export const SearchBar = ({ imageUrl = "", price = "" }: SearchBarProps) => {
  const [searchImageUrl, setSearchImageUrl] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [isLoading, setIsLoading] = useBoolean(false);

  const handleSyntheticClick = useCallback(() => {
    if (searchImageUrl) {
      setIsLoading.on();
      const url = `/api/search?img=${searchImageUrl}&price=${searchPrice}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading.off();
          setSearchedItems(data.matches);
        })
        .catch((error) => {
          setIsLoading.off();
          console.error(error);
        });
    }
  }, [searchImageUrl, searchPrice, setIsLoading]);

  useEffect(() => {
    setSearchImageUrl(imageUrl);
    setSearchPrice(price);
    if (imageUrl && price) {
      handleSyntheticClick();
    }
  }, [imageUrl, price, handleSyntheticClick]);

  return (
    <Container>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(7, 1fr)" }}
        gap={1}
      >
        <GridItem colSpan={{ base: 1, lg: 5 }} h="10">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdImageSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              onChange={(event) => setSearchImageUrl(event.target.value)}
              defaultValue={searchImageUrl}
              placeholder="Search by Image URL..."
            />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={1} h="10">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              onChange={(event) => setSearchPrice(event.target.value)}
              defaultValue={searchPrice}
              placeholder="Enter Price..."
            />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={1} h="10">
          <Button
            disabled={isLoading}
            onClick={handleSyntheticClick}
            width="100%"
            colorScheme="blue"
          >
            Search
          </Button>
        </GridItem>
      </Grid>
      {isLoading && <SearchLoader />}
      {searchedItems.length > 0 && !isLoading && (
        <Box
          mt={{
            base: 5,
            md: 9,
            lg: 16,
          }}
        >
          <SearchTileGrid products={searchedItems} />
        </Box>
      )}
    </Container>
  );
};
