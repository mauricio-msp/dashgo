import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Logo() {
  return (
    <>
      <Link href="/users" passHref>
        <Text
          as="a"
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          letterSpacing="tight"
          w="64"
        >
          dashgo
          <Text as="span" ml="1" color="pink.500">
            .
          </Text>
        </Text>
      </Link>
    </>
  )
}
