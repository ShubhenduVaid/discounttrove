import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useTheme,
  Button,
  Center,
} from "@chakra-ui/react";
import { ShoppingCartIcon } from "@contentful/f36-icons";

import { CtfImage } from "@src/components/features/contentful/ctf-image";
import { PageProductFieldsFragment } from "@src/lib/__generated/sdk";

export const ProductDetails = ({
  name,
  url,
  price,
  description,
  featuredProductImage,
  productImagesCollection,
}: PageProductFieldsFragment) => {
  const theme = useTheme();

  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Container mt={{ base: 6, lg: 16 }}>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, lg: 12 }}>
        <GridItem colSpan={{ base: 12, lg: 7, xl: 8 }}>
          <Flex flexDirection="column" gap={{ base: 3, lg: 5 }}>
            {featuredProductImage && (
              <Box bg={theme.f36.gray200} pt={5} pb={5}>
                <Center>
                  <CtfImage {...featuredProductImage} />
                </Center>
              </Box>
            )}
            {productImagesCollection?.items &&
              productImagesCollection.items.map((image) => {
                return image ? (
                  <Box bg={theme.f36.gray200} pt={5} pb={5}>
                    <Center>
                      <CtfImage
                        key={image.sys.id}
                        imageProps={{
                          sizes: "(max-width: 1200px) 70vw, 100vw",
                        }}
                        {...image}
                      />
                    </Center>
                  </Box>
                ) : null;
              })}
          </Flex>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
          <Box
            width="100%"
            bg={theme.f36.gray200}
            px={{ base: 4, lg: 6 }}
            pt={{ base: 6, lg: 6 }}
            pb={{ base: 6, lg: 6 }}
          >
            <Heading as="h1" variant="h3">
              {name}
            </Heading>
            {price && (
              <Text mt={1} fontSize="2xl" fontWeight="500" color="#036FE3">
                £{price}
              </Text>
            )}
            <Text mt={5} color={theme.f36.gray700}>
              {description}
            </Text>
            <Flex flexDirection="row" mt={6}>
              <Button
                onClick={() => handleClick(url)}
                width="100%"
                variant="primary"
                rightIcon={
                  <Box
                    as={ShoppingCartIcon}
                    width="18px"
                    height="18px"
                    fill="white"
                    variant="white"
                  />
                }
              >
                {"Add to Cart"}
              </Button>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
