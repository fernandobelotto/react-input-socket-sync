import { Center, Heading, VStack } from "@chakra-ui/react";
import { InputSync } from "../components/InputSync";

type Props = {};

export const Home = () => {
  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Heading>Websocket sync</Heading>
        <InputSync />
      </VStack>
    </Center>
  );
};
