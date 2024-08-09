'use client'

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

// Importando a imagem do logo
import logo from '../images/logo1.png'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo */}
        <Box>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            {/* Button to toggle color mode */}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
