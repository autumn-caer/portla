import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VerticalArticles from "./components/VerticalArticles";
import SlideArticles from "./components/SlideArticles";
import HorizontalArticles from "./components/HorizontalArticles";
import LaneArticles from "./components/LaneArticles";
import HorizontalWithMediumImageArticles from "./components/HorizontalWithMediumImageArticles";
import map_image from "./images/FH000009-1000x670.jpeg";
import { article } from "./interfaces";

function App(): JSX.Element {
  const verticalArticles = [
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

  const horizontalArticles: article[] = [
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

  const laneArticles: article[] = [
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
  ];

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <VerticalArticles articles={verticalArticles} />
        <SlideArticles />
        <HorizontalArticles
          articles={horizontalArticles}
          title="JOURNEY TO THINK"
          description="いま、少し考えてみる"
          backgroundColor="#fae6d0"
        />
        <HorizontalArticles
          articles={horizontalArticles}
          title="JOURNEY FOR ACTION"
          description="次、なにする？"
          backgroundColor="#434343"
          fontColor="white"
        />
        <LaneArticles
          articles={laneArticles}
          title="POPULAR"
          description="いま、読まれている記事"
          backgroundColor="white"
        />
        <HorizontalWithMediumImageArticles
          articles={horizontalArticles}
          title="ANTENNA"
          description="いま、少し考えてみる"
          backgroundColor="#434343"
          fontColor="white"
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
