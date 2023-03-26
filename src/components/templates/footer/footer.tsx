import { Container, Box, Text, useTheme, Heading } from "@chakra-ui/react";

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
        <Heading as="h2" mb={3}>
          {"About Us"}
        </Heading>
        <Text>
          {
            "Shop smart and save big on our discounted product's website! We offer a wide range of top-quality products at unbeatable prices."
          }
        </Text>
        <Text mb={8}>
          {"Don't miss out on the best deals – start browsing now!"}
        </Text>

        <Text mb={8}>
          {
            "We're thrilled to let you know that we're an Amazon Associate, which means we earn a commission from qualifying purchases made through our website. This is a great way for you to support us while also getting the products you need from Amazon."
          }
        </Text>

        <Text mb={8}>
          {
            "We only recommend products that we believe in and use ourselves, so you can be confident that you're getting quality products that will meet your needs. Plus, by making your purchases through our website, you'll be supporting our work and helping us to continue to provide valuable content and resources."
          }
        </Text>

        <Text fontSize="2xl" fontWeight="500" mt={3}>
          {"DiscountTrove ©2023"}
        </Text>
      </Container>
    </Box>
  );
};
