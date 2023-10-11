import { Container, Box } from "@chakra-ui/react";
import styles from "../../app/page.module.css";

const Heartbeat = () => {
  return (
    <Container marginBottom="10vh" maxW="1xl" p="5" bg="gray.600" centerContent>
      <Box padding="4" bg="gray.400" color="black" maxW="lg">
        <bold>We believe that </bold>small businesses are the heartbeat of our
        communities, embodying passion and tenacity. In an increasingly digital
        age, online solutions should not be a luxury reserved for large brands
        alone. Every enterprise, no matter its size, deserves an online
        presence. After all, ensuring digital access for small businesses
        isn&rsquo;t just about leveling the playing field; it&rsquo;s about
        recognizing and nurturing the soul of our local communities
      </Box>
    </Container>
  );
};

export default Heartbeat;
