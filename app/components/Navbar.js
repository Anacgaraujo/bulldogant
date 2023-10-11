import { Box, Flex, Link, Button, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex as="nav" boxShadow="md" p="4" align="center">
      <NextLink href="/" passHref>
        <Link fontSize="xl" fontWeight="bold">
          {/* Logo */}
        </Link>
      </NextLink>

      <Spacer />

      <Box>
        <NextLink href="/about" passHref>
          <Button as={Link} variant="ghost" mr={4}>
            {/* About */}
          </Button>
        </NextLink>

        <NextLink href="mailto:actanaaraujo@gmail.com" passHref>
          <Button as={Link} variant="ghost">
            Contact Now!
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
