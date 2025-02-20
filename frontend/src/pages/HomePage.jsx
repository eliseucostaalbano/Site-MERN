import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
           Produtos Atuais 🚀
        </Text>

      <SimpleGrid
      columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
      >
      
      </SimpleGrid>

      	<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						Nenhum produto encontrado 😢{" "}
						<Link to={"/criar"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Criar um produto
							</Text>
						</Link>
					</Text>

      </VStack>
    </Container>
  );
};

export default Homepage;
