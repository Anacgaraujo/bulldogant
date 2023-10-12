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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  MdSettings,
  MdCheckCircle,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

export default function landingpage() {
  return (
    <div>
      <Stack>
        <Heading as="h2" size="2xl" textAlign="center" p="5">
          Email is considered the most critical factor in marketing success by
          over 40%
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
            <Text width="100%">
              Your customers are busy. And between social media, mobile
              notifications, and traditional media like television and print,
              there&rsquo;s a lot of noise competing for their attention.
              That&rsquo;s why email marketing is such a great way to stay at
              the top of their minds — by staying at the top of their inboxes.
            </Text>
            <Text>
              Email can help you drive engagement with your customers and build
              loyalty while also having a significant, positive impact on your
              business, especially sales.
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Build loyalty and stay top-of-mind
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Promote sales and offers
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Gather feedback and reviews
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Promote your latest content
              </ListItem>
            </List>
          </Box>

          <Box width={{ base: "100%", md: "50%" }}>
            <Image
              objectFit="cover"
              width="100%"
              src="emailmktB.png"
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
          <Text
            fontSize="xl"
            fontWeight="bold"
            colorScheme="black"
            textAlign="center"
          >
            Opening an email is more of a personal commitment than scrolling
            past an ad on a social media timeline. Someone who clicks on your
            email is immediately committed to and
            <Badge ml="1" fontSize="0.8em" colorScheme="teal">
              engaged with your content.
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
            <Button variant="solid" colorScheme="teal">
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
              You know you need to attract new customers and keep your existing
              clients coming back, but you can&rsquo;t afford to invest time or
              resources into something that isn&rsquo;t going to deliver the
              results you expect. That&rsquo;s why email marketing is important
              when it comes to small business marketing.
            </Text>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
}
