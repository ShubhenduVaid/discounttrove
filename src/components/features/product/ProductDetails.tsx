import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useTheme,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ShoppingCartIcon } from "@contentful/f36-icons";

import { CtfImage } from "@src/components/features/contentful/ctf-image";
import { PageProductFieldsFragment } from "@src/lib/__generated/sdk";

export const ProductDetails = ({
  name,
  amazonUrl,
  aliexpressUrl,
  amazonPrice,
  aliexpressPrice,
  description,
  featuredProductImage,
  productImagesCollection,
}: PageProductFieldsFragment) => {
  const theme = useTheme();

  const _amazonPrice = amazonPrice && parseFloat(amazonPrice).toFixed(2);
  const _aliexpressPrice =
    aliexpressPrice && parseFloat(aliexpressPrice).toFixed(2);

  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Container mt={{ base: 6, lg: 16 }}>
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 5, lg: 12 }}>
        <GridItem colSpan={{ base: 12, lg: 7, xl: 8 }}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            rowGap={{ base: 6, lg: 6 }}
            columnGap={{ base: 4, lg: 24 }}
          >
            {featuredProductImage && (
              <GridItem>
                <Box borderRadius="lg" bg={theme.f36.gray50} pt={5} pb={5}>
                  <CtfImage {...featuredProductImage} />
                </Box>
              </GridItem>
            )}
            {productImagesCollection?.items &&
              productImagesCollection.items.map((image, index) => {
                return image ? (
                  <GridItem key={index}>
                    <Box borderRadius="lg" bg={theme.f36.gray50} pt={5} pb={5}>
                      <CtfImage
                        key={image.sys.id}
                        imageProps={{
                          sizes: "(max-width: 1200px) 70vw, 100vw",
                        }}
                        {...image}
                      />
                    </Box>
                  </GridItem>
                ) : null;
              })}
          </Grid>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
          <Box
            borderRadius="lg"
            width="100%"
            bg={theme.f36.gray100}
            px={{ base: 4, lg: 6 }}
            pt={{ base: 6, lg: 6 }}
            pb={{ base: 6, lg: 6 }}
          >
            <Heading as="h1" variant="h3">
              {name}
            </Heading>
            {_amazonPrice && (
              <Flex mt="3">
                <Button
                  onClick={() => handleClick(amazonUrl)}
                  width="70%"
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
                  {"Buy on Amazon"}
                </Button>
                <Spacer />
                <Text
                  borderRadius="lg"
                  pt={2}
                  pb={1}
                  pr={3}
                  pl={3}
                  bg="#ff5f3b"
                  fontSize={{ base: "sm", md: "md", lg: "l" }}
                  fontWeight="bold"
                  color="white"
                >
                  £{_amazonPrice}
                </Text>
              </Flex>
            )}
            {_aliexpressPrice && (
              <Flex mt="3">
                <Button
                  onClick={() => handleClick(aliexpressUrl)}
                  width="70%"
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
                  {"Buy on AliExpress"}
                </Button>
                <Spacer />
                <Text
                  borderRadius="lg"
                  pt={2}
                  pb={1}
                  pr={3}
                  pl={3}
                  bg="#ff5f3b"
                  fontSize={{ base: "sm", md: "md", lg: "l" }}
                  fontWeight="bold"
                  color="white"
                >
                  £{_aliexpressPrice}
                </Text>
              </Flex>
            )}
            <Text mt={5} color={theme.f36.gray700}>
              {description}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
