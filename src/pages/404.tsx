import {
  Text,
  Container,
  Flex,
  Heading,
  Link as TextLink,
  useTheme,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";

const ErrorPage404 = () => {
  const theme = useTheme();

  return (
    <Container as={Flex} flexDirection="column" my="auto" py={20}>
      <Heading as="h1" size="3xl" variant="h1">
        {"SORRY"}
      </Heading>
      <Text mt={4} fontSize="4xl">
        {"We couldn't find that page"}
      </Text>
      <Text fontSize="4xl" mt={4}>
        Go to our{" "}
        <TextLink
          color={theme.f36.blue500}
          as={Link}
          href="https://discounttrove.co.uk/"
        >
          Home Page
        </TextLink>
      </Text>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};

export default ErrorPage404;
