import React, { useState, useEffect } from "react";
import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import hero_image from "../images/early-morning-g1dc17ac08_1280.jpg";
import antena_image from "../images/cat-g3daefc9de_1280.jpg";
import zine_image from "../images/danube-river-g2329831af_1280.jpg";

import HeroSlide from "./HeroSlide";

const Hero: React.FC = () => {
  const [showHero, setShowHero] = useState<number>(0);
  const [remainTime, setRemainTime] = useState<number>(0);

  const slides = [
    {
      title:
        "自分なりの「わからない」を積み上げていく出版社さりげなく・稲垣佳乃子さん｜関係性の紡ぎ方#1",
      slideNo: 0,
      imageUrl: hero_image,
      category: "JOURNEY FOR ACTION",
    },
    {
      title:
        "音楽に触れ、思考し、書く　音楽ライターという生き方　天野史彬×ANTENNA副編集長・峯大貴〈editor’s voice〉",
      slideNo: 1,
      imageUrl: antena_image,
      category: "JOURNEY FOR ACTION",
    },
    {
      title:
        "芝生の上、空の下、カオスにさらけだし合うひとたち。「さらけだすZINEピクニック」インタビュー",
      slideNo: 2,
      imageUrl: zine_image,
      category: "JOURNEY FOR ACTION",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((remainTime) => {
        if (remainTime >= 100) {
          setShowHero(showHero >= slides.length - 1 ? 0 : showHero + 1);
          return 0;
        } else {
          return remainTime + 20;
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [showHero]);

  return (
    <Box w="100vw" p="40px">
      <Box>
        {slides.map((slide) => {
          return (
            <HeroSlide
              title={slide.title}
              imageUrl={slide.imageUrl}
              slideNo={slide.slideNo}
              showSlide={showHero === slide.slideNo}
              category={slide.category}
              key={slide.slideNo}
            />
          );
        })}
      </Box>
      <Box>
        {slides.map((slide) => {
          const percent = slide.slideNo === showHero ? remainTime : 0;
          const fontColor =
            slide.slideNo === showHero ? "#1d0e0e" : "rgba(29,14,14,.5)";
          return (
            <CircularProgress
              value={percent}
              color="#1d0e0e"
              key={slide.slideNo}
              thickness="4px"
              onClick={() => {
                setShowHero(slide.slideNo);
                setRemainTime(0);
              }}
              cursor="pointer"
            >
              <CircularProgressLabel color={fontColor}>
                {slide.slideNo + 1}
              </CircularProgressLabel>
            </CircularProgress>
          );
        })}
      </Box>
    </Box>
  );
};

export default Hero;
