import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Heading color="blackAlpha.900">Yureka.Media</Heading>
      </Box>
    </>
  );
}

export default App;
