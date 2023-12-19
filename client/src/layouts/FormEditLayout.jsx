import { Button, Form, notification } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

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

const FormLayout = ({submitApiUrl, entityName, routerUrl, fields}) => {
  const navigate = useNavigate();
  const params = useParams()
const [data, setData] = React.useState()

  const loadData = () => {
    axios.get('localhost:3001/')
  }

  const onFinish = (values) => {
    axios.post(`${submitApiUrl}`, {
      header:{token:`Beare ${localStorage.getItem('access_token')}`},
      data: { ...values },
    })
      .then(() => {
        navigate(`${routerUrl}`);
        return notification.success({
          message: `Create ${entityName} successfully`,
        });
      })
      .catch((err) => {
        console.log(err)
        // navigate(`${routerUrl}`);
        return notification.error({
        
          message: `Create ${entityName} failed`,
          description: err.message,
        });
      });
  };
  return (
    <Form {...layout} validateMessages={validateMessages} onFinish={onFinish}>
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

export default FormLayout;
