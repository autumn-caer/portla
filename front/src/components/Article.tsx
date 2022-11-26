import React from "react";
import { VStack, Image, Text, Box, Tag, TagLabel } from "@chakra-ui/react";

interface ArticleProps {
  title: string;
  imageUrl: string;
  category?: string;
  genre: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  imageUrl,
  category,
  genre,
}) => {
  return (
    <VStack w="80%">
      <Box>
        <Image src={imageUrl} alt="Dan Abramov" />
      </Box>
      {category && (
        <Text fontSize="md" color="#b34023">
          {category}
        </Text>
      )}
      <Text fontSize="md" as="b">
        {title}
      </Text>
      <Box display="flex" alignItems="left" w="100%">
        <Tag
          size="sm"
          key="sm"
          borderRadius="full"
          colorScheme="blackAlpha"
          variant="outline"
          cursor="pointer"
        >
          <TagLabel>#{genre}</TagLabel>
        </Tag>
      </Box>
    </VStack>
  );
};

export default Article;
