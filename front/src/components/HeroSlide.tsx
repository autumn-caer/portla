import React from "react";
import { Box, Image, Grid, GridItem, Text, Fade } from "@chakra-ui/react";

interface HeroSlideProps {
  title: string;
  slideNo: number;
  showSlide: boolean;
  imageUrl: string;
  category: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  title,
  slideNo,
  imageUrl,
  showSlide,
  category,
}) => {
  return (
    <>
      {showSlide && (
        <Fade in={showSlide} transition={{ enter: { duration: 2 } }}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%">
              <Box mt={40}>
                <Text fontSize="xl" color="#b34023">
                  {category}
                </Text>
                <Text fontSize="4xl" position="absolute" width="45%">
                  {title}
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2} w="100%">
              <Box color="white" bg="teal.500" rounded="md" shadow="md">
                <Image src={imageUrl} alt="Dan Abramov" />
              </Box>
            </GridItem>
          </Grid>
        </Fade>
      )}
    </>
  );
};

export default HeroSlide;
