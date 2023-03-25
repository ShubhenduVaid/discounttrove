import { Container, Box, Text, Link, useTheme } from "@chakra-ui/react";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      as="footer"
      width="full"
      py={{ base: 10, lg: 16 }}
      mt="auto"
      borderTop="1px"
      borderColor={theme.f36.gray200}
    >
      <Container>
        <Text fontSize="xl" mb={8}>
          {"About Us"}
        </Text>
        <Text>
          {
            "Shop smart and save big on our discount product website! We offer a wide range of top-quality products at unbeatable prices."
          }
        </Text>
        <Text mb={8}>
          {"Don't miss out on the best deals – start browsing now!"}
        </Text>
        <Text>{"DiscountTrove ©2023"}</Text>
      </Container>
    </Box>
  );
};
