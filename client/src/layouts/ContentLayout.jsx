import React from 'react'
import {
  Button,
  Layout,
  Modal,
  Space,
  Table,
  Typography,
  notification,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ContentLayout = ({pageName, isShowButton, navigateTo, content }) => {
  const navigate = useNavigate()
  return (
    <div>
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      >
        <div>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {pageName}
          </Typography.Title>
          <Typography.Paragraph type="secondary">
            Display all abc of the training program
          </Typography.Paragraph>
        </div>
        { isShowButton && <Button
          onClick={() => navigate(`${navigateTo}`)}
          icon={<PlusOutlined />}
          type="default"
        >
          Create
        </Button>}
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default ContentLayout