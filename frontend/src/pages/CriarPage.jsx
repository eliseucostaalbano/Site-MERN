import {Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack,} from "@chakra-ui/react";
import { useState } from "react";
import { usarLojaProdutos } from "../loja/Produto";

const CriarPage = () => {
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preço: "",
    imagem: "",
  });
  const toast  = useToast()

const {criarProduto} = usarLojaProdutos()
//lembrar de rodar o sevidor backend
  const handleAddProduto = async() => {
  const {success, message} = await criarProduto(novoProduto)
  if (!success) {
			toast({
				title: "Erro",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Sucesso",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
    setNovoProduto({nome: "", preço:"", imagem:""})
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Criar Novo Produto
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Nome do Produto"
              name="nome"
              value={novoProduto.nome}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, nome: e.target.value })
              }
            />

            <Input
              placeholder="Preço do Produto"
              name="nome"
              type="number"
              value={novoProduto.preço}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, preço: e.target.value })
              }
            />

            <Input
              placeholder="URL da Imagem"
              name="imagem"
              value={novoProduto.imagem}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, imagem: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handleAddProduto} w={"full"}>
              Adicionar Produto
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CriarPage;
