/* eslint-disable @next/next/no-img-element */
import { Box, Text, Center, useTheme } from "@chakra-ui/react";
import Link from "next/link";

export interface SearchTileProps {
  link: string;
  price: { value: string; extracted_value: number; currency: string };
  source: string;
  source_icon: string;
  thumbnail: string;
  title: string;
}

export const SearchTile = ({
  link,
  price,
  source,
  source_icon,
  thumbnail,
  title,
}: SearchTileProps) => {
  const theme = useTheme();

  return link ? (
    <Box bg={theme.f36.gray100} borderRadius="md">
      <Box
        as={Link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        borderRadius="md"
      >
        {source && (
          <Box bg="#C05621" borderRadius="md" borderBottomRadius="sm">
            <Center p={2}>
              <img width={20} height={20} src={source_icon} alt={source} />
              <Text
                ml={3}
                fontSize={{ base: "sm", md: "md", lg: "l" }}
                fontWeight="bold"
                color="white"
              >
                {source}
              </Text>
            </Center>
          </Box>
        )}
        {thumbnail && (
          <Box pt={1} overflow="hidden">
            <Center>
              <img src={thumbnail} alt={title} />
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
                {price.value}
              </Text>
            </Center>
          </Box>
        )}
      </Box>
    </Box>
  ) : null;
};
