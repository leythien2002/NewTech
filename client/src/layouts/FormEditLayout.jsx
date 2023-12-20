import { Button, Form, notification } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { useEffect } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const FormEditLayout = ({submitApiUrl, entityName, routerUrl, fields}) => {
  const navigate = useNavigate();
  const params = useParams()
const [data, setData] = React.useState()
const [form]=Form.useForm()


const loadData = () => {
  console.log("requestData")
  console.log(params.id)
    axios.get(`http://localhost:3001/auth/getUser/${params.id}`)
    .then(response=>{
      console.log(response.data)
      if(response.status === 200){
        setData(response.data.data)
      }
      return;
    })
    .catch(err => {
      console.log("GetUserProfile",err)
    })
  }

useEffect(()=>{
  form.setFieldsValue(data)
}, [data])
useEffect(()=>{
  loadData()
}, [])

const onFinish = (values) => {
  console.log("Onfinishvalue", values)
    axios.put(`${submitApiUrl}`, {
      // header:{token:`Beare ${localStorage.getItem('access_token')}`},
      data: { ...values, _id:params.id },
    })
  
      .then(response => {
        navigate(`${routerUrl}`);
        console.log("aloalo",response.data)
        return notification.success({
          message: `Create ${entityName} successfully`,
        });
      })
      .catch((err) => {
        console.log(err)
        console.log(data)
        // navigate(`${routerUrl}`);
        return notification.error({
          message: `Create ${entityName} failed`,
          description: err.message,
        });
      });
  };
  return (
    <Form form={form} {...layout} validateMessages={validateMessages} onFinish={onFinish}>
      {fields.map((field) => (
        <Form.Item
          key={field.key}
          name={field.name}
          label={field.label}
          rules={field.rules}
          children={field.children}
        />
      ))}
      <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormEditLayout;
