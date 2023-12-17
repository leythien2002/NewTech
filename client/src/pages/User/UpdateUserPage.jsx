import React from 'react'
import FormLayout from '../../layouts/FormLayout'
import Input from 'antd/es/input/Input'
import { Select } from 'antd'
const Update = () => {
  return (
    <div>
      <FormLayout 
      entityName={'test'} 
      routerUrl={'/user/list'}
      submitApiUrl={'/route3'} 
      fields={
        [
          {
            name: 'test',
            label: 'test',
            children: <Input />
          }
        ]
      }>
      
      </FormLayout>
    </div>  
    )
}

export default Update