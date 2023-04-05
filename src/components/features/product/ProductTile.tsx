import { Box, Text, Center, useTheme } from "@chakra-ui/react";
import Link from "next/link";

import { CtfImage } from "@src/components/features/contentful/ctf-image";
import { PageProductFieldsFragment } from "@src/lib/__generated/sdk";

export const ProductTile = ({
  featuredProductImage,
  category,
  amazonPrice,
  aliexpressPrice,
  slug,
}: PageProductFieldsFragment) => {
  const theme = useTheme();

  const highPrice = "10000";

  const _amazonPrice = parseFloat(amazonPrice || highPrice);
  const _aliexpressPrice = parseFloat(aliexpressPrice || highPrice);

  let price: any =
    _amazonPrice > _aliexpressPrice ? _aliexpressPrice : _amazonPrice;

  let discount;
  if (
    _aliexpressPrice === parseInt(highPrice) ||
    _amazonPrice === parseInt(highPrice)
  ) {
    discount = null;
  } else {
    const _higherPrice =
      _amazonPrice > _aliexpressPrice ? _amazonPrice : _aliexpressPrice;
    const _lowerPrice =
      _amazonPrice < _aliexpressPrice ? _amazonPrice : _aliexpressPrice;

    discount = Math.floor(((_higherPrice - _lowerPrice) / _higherPrice) * 100);
  }

  price = price.toFixed(2);

  return slug ? (
    <Box bg={theme.f36.gray100} borderRadius="md">
      <Box as={Link} href={slug} borderRadius="md">
        {category && (
          <Box bg="#C05621" borderRadius="md" borderBottomRadius="sm">
            <Center pb={2}>
              <Text
                mt={3}
                fontSize={{ base: "sm", md: "md", lg: "l" }}
                fontWeight="bold"
                color="white"
              >
                {category}
              </Text>
            </Center>
          </Box>
        )}
        {featuredProductImage && (
          <Box pt={1} overflow="hidden">
            <Center>
              <CtfImage {...featuredProductImage} />
            </Center>
          </Box>
        )}
        {price && (
          <Box pb={3}>
            <Center>
              <Text
                pt={1}
                pb={1}
                pr={3}
                pl={3}
                bg="#C05621"
                borderRadius="2xl"
                mt={3}
                fontSize={{ base: "sm", md: "md", lg: "l" }}
                fontWeight="bold"
                color="white"
              >
                £ {price}
              </Text>
              {discount && (
                <Text
                  ml={2}
                  pt={1}
                  pb={1}
                  pr={3}
                  pl={3}
                  bg="rgb(204, 12, 57)"
                  borderRadius="2xl"
                  mt={3}
                  fontSize={{ base: "sm", md: "md", lg: "l" }}
                  fontWeight="bold"
                  color="white"
                >
                  {discount}% off
                </Text>
              )}
            </Center>
          </Box>
        )}
      </Box>
    </Box>
  ) : null;
};
