import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { usarLojaProdutos } from "../loja/Produto";

const CardProduto = ({ produto }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deletarProduto,} = usarLojaProdutos();
	const toast = useToast();

 const handleDeletarProduto = async (pid) => {
		const { success, message } = await deletarProduto(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({ 
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};


  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={produto.imagem} alt={produto.nome} w='full' objectFit='cover'/>
      <Box p={4}>

        <Heading as="h3" size="md" mb={2}>
          {produto.nome}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${produto.preço}
        </Text>
       
       <HStack spacing={2}>
      <IconButton icon={<EditIcon />}colorScheme="blue"/>
      <IconButton icon={<DeleteIcon />} onClick={()=> handleDeletarProduto(produto._id)} colorScheme="red"/>
       </HStack>

      </Box>
    </Box>
  );
};

export default CardProduto;
