import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Column, Row, Text, TextField } from "@/components";

import Logo from '@/assets/logo.svg'
import Banner from '@/assets/banner.svg'
import { userSchema } from "@/schemas/user";

interface UserProps {
    email: string
    password: string
}

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserProps>({resolver: zodResolver(userSchema)})

    const onSubmit = (data: UserProps) => {
        console.log(data)
    } 

    return (
        <Row height='100vh' overflow='hidden'>
            <Column width='50%' backgroundColor='gray.200'>
                <Column width='400px' m='40px auto 0'>
                    <Image src={Logo} alt='logo' />
                    <Text variant="medium" fontWeight='600' mt='60px' mb='s1'>Acesse a plataforma</Text>
                    <Text variant='tiny' mb='40px'>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</Text>
    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField label='E-mail' placeholder='Digite seu e-mail' name="email" register={register} error={errors.email} mb='s4' />
                        <TextField label='Senha' placeholder='Digite sua senha' type='password' register={register}  name="password" error={errors.password} />
                        <Button my='s5'>Entrar</Button>
                        <Row>
                            <Text variant="tiny" color='gray.300'>Ainda não possui uma conta?</Text>
                            <Text variant="tiny" fontWeight='500' color='primary' ml='s1'>Inscreva-se</Text>
                        </Row>
                    </form>
                </Column>
            </Column>
            <Column width='50%'>
                <Image src={Banner} alt='banner'/>
            </Column>
        </Row>
    )
}