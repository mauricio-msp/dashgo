import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Maurício Porfírio</Text>
          <Text color="gray.300" fontSize="small">
            mauriciosporfirio@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="mauricio de souza porfirio"
        src="https://github.com/mauricio-msp.png"
      />
    </Flex>
  )
}
