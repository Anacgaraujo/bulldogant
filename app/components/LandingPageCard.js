import {
  Box,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import styles from "../../app/page.module.css";

export default function LandingPageCard() {
  return (
    <div className={styles.landingPage}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        borderWidth="1px"
        borderRadius="md"
        spacing={5}
        p={5}
      >
        <Image
          objectFit="cover"
          flex="1"
          maxW={{ base: "100%", sm: "200px" }}
          width={{ base: "100%", sm: "40vw", md: "30vw" }}
          src="landingpage.jpg"
          alt="Landing Page Image"
        />

        <Box flex="2" p={{ base: "4", sm: "10" }}>
          <Heading size="md" mb="4">
            Landing Pages
          </Heading>

          <Text py="2" p="5">
            In today&rsquo;s digital age, a landing page is more than just a
            digital footprint. It&rsquo;s your business&rsquo;s first
            impression, its virtual handshake. An effective landing page not
            only showcases your offerings but also resonates with your audience,
            guiding them to take action. Whether you&rsquo;re building brand
            awareness, capturing leads, or driving sales, a compelling landing
            page is pivotal. It&rsquo;s where interest transforms into
            engagement. Don&rsquo;t miss the opportunity to connect, impress,
            and convert. Every successful business deserves a standout landing
            page.
          </Text>
        </Box>

        {/* <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter> */}
      </Stack>
      <Stack
        direction={{ base: "column-reverse", sm: "row" }}
        overflow="hidden"
        borderWidth="1px"
        borderRadius="md"
        spacing={5}
        p={5}
        mt={8}
      >
        <Box flex="2" p={{ base: "4", sm: "10" }}>
          <Heading size="md" mb="4">
            E-mail Marketing
          </Heading>

          <Text py="2" p="5">
            In a world cluttered with fleeting digital interactions, email
            marketing remains a powerful cornerstone. It&rsquo;s personal,
            direct, and tailored, allowing businesses to speak right into the
            inboxes of their audience. Beyond just promotions, it&rsquo;s a
            channel to foster relationships, share stories, and drive tangible
            results. With every email sent, you&rsquo;re not just reaching out;
            you&rsquo;re resonating, reminding, and re-engaging. It&rsquo;s a
            timeless tool with a modern twist. In the age of fleeting attention,
            make your message count with impactful email marketing.
          </Text>
        </Box>

        {/* <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </CardFooter> */}
        <Image
          objectFit="cover"
          flex="1"
          maxW={{ base: "100%", sm: "200px" }}
          width={{ base: "100%", sm: "40vw", md: "30vw" }}
          src="emailmkt.jpg"
          alt="Caffe Latte"
        />
      </Stack>
    </div>
  );
}
