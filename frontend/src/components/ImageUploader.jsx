import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

export default function ImageUploader({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (bookData?.image) {
      const file = new File([], bookData.image, { type: 'image/*' });
      setSelectedImage(URL.createObjectURL(file));
      fileInputRef.current.value = '';
    }
  }, [bookData]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }

  return (
    <Box>
      <Input
        type="file"
        accept="image/*"
        required
        ref={fileInputRef}
        onChange={handleImageUpload}
        mb={4}
      />
      {selectedImage && (
        <Box>
          <img src={selectedImage} alt="Selected Image" />
          <Text color="navy" mt={2}>
            Image Preview
          </Text>
        </Box>
      )}
    </Box>
  );
}