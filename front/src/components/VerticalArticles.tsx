import React, { useRef, useMemo } from "react";
import {
  Box,
  Flex,
  Image,
  Grid,
  GridItem,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import Article from "./Article";
import map_image from "../images/FH000009-1000x670.jpeg";
import { useOffsetTop } from "../hooks/useOffsetTop";
import { article } from "../interfaces";

interface verticalArticlesProps {
  articles: article[];
}

const VerticalArticles: React.FC<verticalArticlesProps> = ({ articles }) => {
  const maxIconSize = 800; // 要素の最大サイズ
  const minIconSize = 0; // 要素の最小サイズ
  const minViewport = -620;
  const maxViewport = 100;

  const iconRef = useRef(null);
  const { pageOffsetTop, viewportTop } = useOffsetTop(iconRef);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    // 位置を取得できなかったときは最大サイズとして表示
    if (pageOffsetTop === undefined || viewportTop === undefined)
      return minIconSize;

    if (viewportTop >= maxViewport) {
      const size = minIconSize;
      return size.toFixed(1);
    } else if (viewportTop <= minViewport) {
      const size = maxIconSize;
      return size.toFixed(1);
    } else {
      const size = viewportTop * -1 + 100;
      return size.toFixed(1);
    }
  }, [pageOffsetTop, viewportTop]);

  return (
    <Box w="100vw">
      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Flex w="100vw" h="200vh" p="40px">
          <Box w="50%" m="10px">
            <div
              ref={iconRef}
              style={{
                width: `100px`,
                height: `${iconSize}px`,
              }}
            />
            <Image src={map_image} alt="Dan Abramov" />
          </Box>
          <Box w="50%" m="10px">
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
              {articles.map((article: article, index: number) => {
                return (
                  <GridItem mb="10px" key={index}>
                    <Article
                      title={article.title}
                      imageUrl={article.imageUrl}
                      category={article.category}
                      genre={article.genre}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </Flex>
        <Center w="100%" h="30vh">
          <Button
            as="a"
            href="https://google.com"
            rounded="3xl"
            size="lg"
            colorScheme="blackAlpha"
          >
            view more
          </Button>
        </Center>
      </Box>
      <Box
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        p="20px"
      >
        <Box m="10px">
          <div
            style={{
              width: `100px`,
            }}
          />
          <Image src={map_image} alt="Dan Abramov" />
          <Text
            fontSize={{ base: "md", sm: "md", md: "xl", lg: "xl" }}
            color="#b34023"
          >
            Choose Convenience Yourself
          </Text>
          <Text fontSize={{ base: "lg", sm: "lg", md: "2xl", lg: "4xl" }}>
            自分で選ぶ、便利との付き合いかた
          </Text>
        </Box>
        <Box m="10px">
          <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            {articles.map((article: article, index: number) => {
              return (
                <GridItem mb="10px" key={index}>
                  <Article
                    title={article.title}
                    imageUrl={article.imageUrl}
                    category={article.category}
                    genre={article.genre}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Center w="100%" h="15vh">
          <Button
            as="a"
            href="https://google.com"
            rounded="3xl"
            size="lg"
            colorScheme="blackAlpha"
          >
            view more
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default VerticalArticles;
