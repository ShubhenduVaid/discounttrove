import { Center, Spinner, Text } from "@chakra-ui/react";

export const SearchLoader = () => {
  return (
    <Center p={5}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text
        pl={4}
        fontSize={{ base: "sm", md: "md", lg: "l" }}
        fontWeight="bold"
      >
        Searching...
      </Text>
    </Center>
  );
};
