import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { usarLojaProdutos } from "../loja/Produto";
import { useState } from "react";

const CardProduto = ({ produto }) => {
  const [updatedProduto, setUpdatedProduto] = useState(produto);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deletarProduto, updateProduto} = usarLojaProdutos();
	const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure()

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

  const handleUpdateProduto = async (pid, updatedProduto) => {
		const { success, message } = await updateProduto(pid, updatedProduto);
		onClose();
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
				title: "Sucesso",
				description: "Produto Atualizado com sucesso ",
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
      <IconButton icon={<EditIcon />}onClick={onOpen} colorScheme="blue"/>
      <IconButton icon={<DeleteIcon />} onClick={()=> handleDeletarProduto(produto._id)} colorScheme="red"/>
       </HStack>
      </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Atulização do Produto</ModalHeader>
      <ModalBody>
        <VStack spacing={4}>
        <Input
								placeholder='Product Name'
								name='nome'
								value={updatedProduto.nome}
								onChange={(e) => setUpdatedProduto({ ...updatedProduto, nome: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='preço'
								type='number'
								value={updatedProduto.preço}
								onChange={(e) => setUpdatedProduto({ ...updatedProduto, preço: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='imagem'
								value={updatedProduto.imagem}
								onChange={(e) => setUpdatedProduto({ ...updatedProduto, imagem: e.target.value })}
							/>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateProduto(produto._id, updatedProduto)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
      </ModalFooter>
    </ModalContent>
    </Modal>

    </Box>
  );
};

export default CardProduto;
