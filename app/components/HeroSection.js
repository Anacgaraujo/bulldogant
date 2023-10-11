import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box position="relative" h={{ base: "300px", md: "500px" }} w="full">
      <Image
        src="/hero-bgB.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Hero Background"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={2}>
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight="bold"
            padding={{ base: "5px", md: "10px" }}
            marginTop={{ base: "20vh", md: "50vh" }}
            color="black"
          >
            BulldogAnt
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            color="black"
            fontWeight="medium"
            textAlign="center"
            pb={{ base: "5", md: "10" }}
          >
            Accessible online solution for small businesses
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
