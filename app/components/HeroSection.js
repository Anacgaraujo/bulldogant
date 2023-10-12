import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../app/page.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroWrapper}>
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
          flexDirection="column"
        >
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight="bold"
            color="black"
            textAlign="center"
            position="absolute"
            bottom={{ base: "50px", md: "20px" }}
            width="100%"
          >
            BulldogAnt
          </Text>

          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            color="black"
            fontWeight="medium"
            textAlign="center"
            position="absolute"
            bottom={{ base: "10px", md: "5px" }}
            width="100%"
          >
            Accessible online solution for small businesses
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default HeroSection;
