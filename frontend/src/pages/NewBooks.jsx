import { Box } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

export default function NewBookPage() {
  return (
    <Box w="100%" h="100vh" py={4} px={24} mx="auto" mt={8} bg="beige">
      <BookForm />
    </Box> 
  );
}