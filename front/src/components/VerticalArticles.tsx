import React, { useRef, useMemo } from "react";
import {
  Box,
  Flex,
  Image,
  Grid,
  GridItem,
  Button,
  Center,
} from "@chakra-ui/react";
import Article from "./Article";
import map_image from "../images/FH000009-1000x670.jpeg";

import { useOffsetTop } from "../hooks/useOffsetTop";

const VerticalArticles: React.FC = () => {
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

  const articless = [
    {
      title:
        "勉強とは「布石」を置くこと。そして誰かとつながること。勉強家・兼松佳宏インタビュー",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "OTHER",
    },
    {
      title:
        "人が自由になるための学問・リベラルアーツは「『私』を取り戻す学問」なのかもしれない",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "OTHER",
    },
    {
      title:
        "かつての恩師が目指し続ける、「自分」を作る教育。「勉強とは、自ら『文化資本』を構築すること」",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "OTHER",
    },
    {
      title:
        "「勉強」って、自分の地図を広げていく行為なのかも。 取材を終えた私たちが思う「勉強とは何か」の答え。",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "OTHER",
    },
    {
      title:
        "旅人と編集者。２つの視点を行き来しながら見つける自分の現在地 『LOCKET』編集長 内田洋介インタビュー。",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "BOOKS",
    },
    {
      title:
        "1845年創業の紙問屋〈柿本商事〉に聞いた「紙でしか伝えきれない想い」とは",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "OTHERS",
    },
    {
      title: "只本屋",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "SPOT",
    },
    {
      title: "恵文社一乗寺店",
      imageUrl: map_image,
      category: "JOURNEY FOR ACTION",
      genre: "SPOT",
    },
  ];
  return (
    <Box w="100vw">
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
            {articless.map((article, index) => {
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
  );
};

export default VerticalArticles;
