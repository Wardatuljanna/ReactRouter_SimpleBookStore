import { VStack, Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";
import { useParams } from "react-router-dom";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <VStack align="center" justify="center" minH="100vh" bg="beige" w="100%">
      <Box p="8" borderWidth="1px" borderRadius="lg" bg="beige" w="100%" maxW="600px"> {/* Adjust maxW to your preference */}
        <Heading as="h2" mb="4" color="navy" textAlign="center" width="100%">
          Edit Book
        </Heading>
        <BookForm bookData={book} />
      </Box>
    </VStack>
  );
}
