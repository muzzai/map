import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default (props:any) => {
  return (
  <div>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
  </div>
  )
}