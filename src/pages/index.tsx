import { Button, Flex, Stack } from '@chakra-ui/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import { useRouter } from 'next/router'
import Head from 'next/head'

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })
  const errors = formState.errors
  const handleSignIn: SubmitHandler<FieldValues> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    if (!!formState.errors) {
      router.push('/dashboard')
    }
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Head>
        <title>Login | dashgo.</title>
      </Head>
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
