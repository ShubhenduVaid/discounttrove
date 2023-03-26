import { Box, Text, Center, useTheme } from "@chakra-ui/react";
import Link from "next/link";

import { CtfImage } from "@src/components/features/contentful/ctf-image";
import { PageProductFieldsFragment } from "@src/lib/__generated/sdk";

export const ProductTile = ({
  featuredProductImage,
  price,
  slug,
}: PageProductFieldsFragment) => {
  const theme = useTheme();

  return slug ? (
    <Box as={Link} href={slug}>
      {featuredProductImage && (
        <Box
          bg={theme.f36.gray200}
          height={"90%"}
          pt={5}
          pb={5}
          overflow="hidden"
        >
          <Center>
            <CtfImage {...featuredProductImage} />
          </Center>
        </Box>
      )}
      {price && (
        <Center>
          <Text mt={3} fontSize="lg" fontWeight="500">
            £{price}
          </Text>
        </Center>
      )}
    </Box>
  ) : null;
};
