import React from 'react'
import FormLayout from '../../layouts/FormLayout'
import Input from 'antd/es/input/Input'
import { Select } from 'antd'

const CreateUserPage = () => {

  console.log('create page')
  return (
    <div>
      <FormLayout 
      entityName={'test'} 
      routerUrl={'/user/create'}
      submitApiUrl={'http://localhost:3001/auth/register'} 
      fields={
        [
          {
            name: 'username',
            label: 'User Name',
            children: <Input />
          },
          {
            name: 'name',
            label: 'Display Name',
            children: <Input />
          },
          {
            name: 'password',
            label: 'Password',
            children: <Input />
          },
          {
            name: 'role',
            label: 'Role',
            children: <Input />
          }
        ]
      }>
      
      </FormLayout>
    </div>  
    )
}

export default CreateUserPage