import { VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100%" bg="beige" p="4" spacing="4">
      {books?.books?.map((book) => (
        <Box
          key={`${book.id} ${book.title}`}
          bg="navy"
          p="4"
          borderRadius="md"
          width="100%"  // Menetapkan lebar
          height="100%" // Menetapkan tinggi
        >
          <Books {...book} />
        </Box>
      ))}
    </VStack>
  );
}