import { Box, BoxProps, Flex } from "@chakra-ui/react";

import Link from "next/link";

export const HEADER_HEIGHT = 60;

export const Header = (props: BoxProps) => {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      align="center"
      pl={{ base: 4, md: 6, lg: 6 }}
      pr={{ base: 4, md: 6, lg: 6 }}
      height={`${HEADER_HEIGHT}px`}
      zIndex="2"
      {...props}
    >
      <Link href="/" title={"common.homepage"}>
        <Box
          display={{ base: "none", md: "block", lg: "block" }}
          as="button"
          title={"common.logoImageAltText"}
        >
          DiscountTrove
        </Box>
        <Box
          display={{ base: "block", md: "none", lg: "none" }}
          as="button"
          title={"common.logoImageAltText"}
        >
          DiscountTrove
        </Box>
      </Link>
    </Flex>
  );
};
