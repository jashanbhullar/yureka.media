import { Box, Flex, Center, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Flex minHeight="100vh">
      <Center width="100%">
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="bold" color="red.500">
            404
          </Text>
          <Text fontSize="2xl">Page Not Found</Text>
          <Link as={ReactRouterLink} to="/dashboard">
            {" "}
            Dashboard
          </Link>
        </Box>
      </Center>
    </Flex>
  );
};

export default NotFoundPage;
