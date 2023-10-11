import {
  Container,
  Image,
  Box,
  Stack,
  Text,
  Highlight,
  Link,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";

import styles from "../../app/page.module.css";

const PicPega = () => {
  return (
    <div className={styles.boxPicpega}>
      <Container maxW="1xl" p="5" centerContent borderColor="gray.300">
        <Box padding="4" maxW="lg">
          <Text fontSize="4xl">Special Partnership</Text>
          <Stack>
            <Text>
              <Highlight
                query="PicPega"
                styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
              >
                BulldogAnt and PicPega will bring the financial advantages and
                creativity from Brazil to your content!
              </Highlight>
            </Text>
            <Text>
              <Highlight
                query={[
                  "quality",
                  "cost-effectiveness",
                  "premium",
                  "cutting expenses",
                  "elevates your visuals",
                ]}
                styles={{ px: "1", py: "1", rounded: "full", bg: "yellow.100" }}
              >
                Shooting videos and photos in Brazil offers businesses an
                unmatched blend of quality and cost-effectiveness. With its
                diverse landscapes, vibrant cities, and rich cultural backdrops,
                Brazil provides a plethora of cinematic locations without the
                high price tags found in traditional media hubs. Combined with
                the country&rsquo;s skilled local talent and competitive
                production costs, businesses can achieve premium visual content
                while significantly cutting expenses. Choosing Brazil for your
                next shoot not only elevates your visuals but also ensures your
                budget goes further.
              </Highlight>
            </Text>
          </Stack>
        </Box>
        <Image
          objectFit="cover"
          flex="1"
          maxW={{ base: "100%", sm: "600px" }}
          width={{ base: "100%", sm: "80vw", md: "60vw" }}
          src="picpegalanding.png"
          alt="Landing Page Image"
        />
        <Button colorScheme="teal" variant="outline" marginTop="4vh">
          <Link as={NextLink} href="http://picpega.com/">
            Visit PicPega website to learn more!
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default PicPega;
