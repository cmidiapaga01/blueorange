import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  HStack,
  Button,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import image1 from '../images/room1.jpg';
import image2 from '../images/room2.jpg';
import image3 from '../images/room3.jpg';
import image4 from '../images/room3.jpg';

const cards = [
  {
    image: image1,
    title: "Nice Chair, pink",
    price: "$57",
    oldPrice: "$199",
  },
  {
    image: image2,
    title: "Stylish Sofa",
    price: "$150",
    oldPrice: "$300",
  },
  {
    image: image3,
    title: "Modern Lamp",
    price: "$30",
    oldPrice: "$50",
  },
  {
    image: image4,
    title: "Elegant Table",
    price: "$120",
    oldPrice: "$240",
  },
];

export default function ProductSimple() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <Center py={12}>
      <HStack spacing={8}>
        <IconButton
          aria-label="left-arrow"
          icon={<BiLeftArrowAlt />}
          onClick={prevCard}
          isRound
        />

        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${cards[currentIndex].image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {cards[currentIndex].title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {cards[currentIndex].price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {cards[currentIndex].oldPrice}
              </Text>
            </Stack>
            {/* Botão simples do Chakra UI */}
            <Button colorScheme="blue" mt={4}>
              Book Now
            </Button>
          </Stack>
        </Box>

        <IconButton
          aria-label="right-arrow"
          icon={<BiRightArrowAlt />}
          onClick={nextCard}
          isRound
        />
      </HStack>
    </Center>
  );
}
