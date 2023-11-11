import { Box, Center, Button, useToast } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBook, getBookDetailById } from "../modules/fetch";

export default function DeleteBookPage() {
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      toast({
        title: "Success",
        description: "Book deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to delete book",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="beige" p="4" borderRadius="md">
      <Center h="300px">
      <Button colorScheme="red" onClick={handleDeleteBook} bg="navy" color="beige" _hover={{ bg: "darkslategray" }}>
        Delete Book
      </Button>
      </Center>
    </Box>
  );
}