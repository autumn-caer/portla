import React from "react";
import { HStack, Image, Text, Box, Tag, TagLabel } from "@chakra-ui/react";

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
    <HStack w="80%" paddingBottom="calc((100vw / 1440) * 60);">
      <Box
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "calc((100vw / 1440) * 254);",
        }}
        paddingRight={{
          base: "0px",
          sm: "0px",
          md: "0px",
          lg: "calc((100vw / 1440) * 30);",
        }}
      >
        <Image src={imageUrl} alt="Dan Abramov" />
      </Box>
      <Box
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "calc((100vw / 1440) * 254);",
        }}
      >
        {category && (
          <Text fontSize="md" color="#b34023">
            {category}
          </Text>
        )}
        <Text fontSize="md" marginBottom="calc((100vw / 1440) * 20);">
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
      </Box>
    </HStack>
  );
};

export default Article;
