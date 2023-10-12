"use client";
import styles from "../../app/page.module.css";
import {
  Text,
  Container,
  Stack,
  Heading,
  Flex,
  Spacer,
  Box,
  Badge,
  Image,
  Button,
  Link,
  NextLink,
} from "@chakra-ui/react";

export default function landingpage() {
  return (
    <div>
      <Stack>
        <Heading as="h2" size="2xl" textAlign="center" p="5">
          Custom Pages That Convert Clients
        </Heading>
        <Flex
          width="100%"
          justifyContent="center"
          alignContent="center"
          padding="10"
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens, side-by-side on medium and up
          spacing={4} // Spacing between elements
        >
          <Box width={{ base: "100%", md: "50%" }} flex="1">
            <Text p="2" width="100%">
              In the realm of online advertising, a landing page acts as an
              isolated webpage crafted specifically to promote a brand or a
              campaign. It&rsquo;s the destination a user arrives at after
              clicking a link from an email or advertisements on platforms like
              Google, Facebook, YouTube, Instagram, or other online spaces.
            </Text>
            <Text p="2">
              After all, why have you spent all that money and energy on
              generating traffic – social media, SEO, Facebook Ads and Google
              Adwords – if your website isn&rsquo;t ready to receive them?
            </Text>
          </Box>

          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              objectFit="cover"
              width="100%"
              src="laningpage.png"
              alt="Caffe Latte"
              boxShadow="3px 3px 5px 6px #DCDCDC"
            />
          </Box>
        </Flex>

        <Flex
          width="100%"
          justifyContent="center"
          alignContent="center"
          padding="5"
        >
          <Text fontSize="xl" fontWeight="bold" colorScheme="black">
            If you can&rsquo;t impress them at first glance,
            <Badge ml="1" fontSize="0.8em" colorScheme="red">
              you can&rsquo;t impress them at all.
            </Badge>
          </Text>
        </Flex>
        <Flex
          width="100%"
          justifyContent="center"
          alignContent="center"
          padding="5"
        >
          <Link href="mailto:actanaaraujo@gmail.com" isExternal>
            <Button variant="solid" colorScheme="blue">
              Get a FREE quote Today!
            </Button>
          </Link>
        </Flex>

        <Box position="relative" h={{ base: "300px", md: "500px" }} w="full">
          <Image
            src="/bg02.png"
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
              fontSize={{ base: "1rem", md: "1.5rem" }}
              color="black"
              fontWeight="medium"
              textAlign="right"
              position="absolute"
              width="50%"
              bottom="0px"
              right="20px"
            >
              A landing page is devoted to getting a conversion. It&rsquo;s
              focused on a single goal, and optimized to achieve that goal as
              frequently as possible from your site visitors.
            </Text>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
}
