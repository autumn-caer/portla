import React from "react";
import { Box, Flex, Image, Grid, GridItem } from "@chakra-ui/react";
import Article from "./Article";
import map_image from "../images/FH000009-1000x670.jpeg";

const VerticalArticles: React.FC = () => {
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
    <Flex w="100vw" h="300vh" p="40px">
      <Box w="50%" m="10px">
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
  );
};

export default VerticalArticles;
