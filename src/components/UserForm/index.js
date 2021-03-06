import React,{Fragment} from 'react'
import {useInputValue} from '../../hooks/useInputValue'
import { Form, Button, Input, Title} from './styles'
 
export const UserForm = ({onSubmit, title})=>{

    const email = useInputValue('')
    const password = useInputValue('')

    return (
        <Fragment>
        <Title>{title}</Title>
        <Form onSubmit={onSubmit}>
            <Input 
                type="text" 
                placeholder='Email' 
                {...email}
            />
            <Input 
                type="password" 
                placeholder='Password' 
                {...password}
            />
            <Button>{title}</Button>
        </Form>
        </Fragment>

    )
}