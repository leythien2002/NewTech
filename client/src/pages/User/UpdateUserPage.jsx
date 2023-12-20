import React from 'react'
import FormEditLayout from '../../layouts/FormEditLayout'
import Input from 'antd/es/input/Input'
import { useNavigate, useParams } from 'react-router-dom';
import { Select } from 'antd'
const UpdateUserPage = () => {
  const params = useParams()
  return (
    <div>
      <FormEditLayout
      entityName={'test'} 
      routerUrl={'/'}
      submitApiUrl={`http://localhost:3001/auth/update/${params.id}`} 
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
      
      </FormEditLayout>
    </div>  
    )
}

export default UpdateUserPage