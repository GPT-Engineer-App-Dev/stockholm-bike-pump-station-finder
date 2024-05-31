import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding={4} justifyContent="center">
        <Heading size="md">Stockholm Bike Pump Stations</Heading>
      </Flex>
      <Container maxW="container.xl" centerContent>
        <Text fontSize="2xl" my={4}>Find bike pump stations around Stockholm</Text>
        <Map />
      </Container>
    </Box>
  );
};

export default Index;