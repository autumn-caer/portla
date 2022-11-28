import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Stack,
  Image,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import HArticle from "./HArticle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from "../interfaces";

interface horizontalArticlesProps {
  articles: article[];
  title: string;
  description: string;
  backgroundColor: string;
  fontColor?: string;
}

const LaneArticles: React.FC<horizontalArticlesProps> = ({
  articles,
  title,
  description,
  backgroundColor,
  fontColor,
}) => {
  const rightArticle = articles[0];
  const leftArticles = articles.slice(1, articles.length);

  return (
    <Box
      w="100vw"
      minHeight="45vw"
      paddingTop="5vw"
      paddingLeft="10vw"
      bgColor={backgroundColor}
      color={fontColor}
    >
      <Box marginBottom="5vw">
        <Flex>
          <Text fontSize="5xl" marginBottom="3vw">
            {title}
          </Text>

          <Spacer />
        </Flex>
        <Text>{description}</Text>
      </Box>

      <Flex>
        <Stack>
          {leftArticles.map((article: article, index: number) => {
            return (
              <HArticle
                key={index}
                title={article.title}
                imageUrl={article.imageUrl}
                genre={article.genre}
              />
            );
          })}
        </Stack>

        <Stack
          w="calc((100vw / 1440) * 508);"
          marginLeft="calc((100vw / 1440) * 80);"
        >
          <Box>
            <Image
              src={rightArticle.imageUrl}
              h="600px"
              backgroundSize="cover"
              alt="Dan Abramov"
            />
          </Box>
          {rightArticle.category && (
            <Text fontSize="md" color="#b34023">
              {rightArticle.category}
            </Text>
          )}
          <Text fontSize="3xl" marginBottom="calc((100vw / 1440) * 20);">
            {rightArticle.title}
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
              <TagLabel>#{rightArticle.genre}</TagLabel>
            </Tag>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LaneArticles;
