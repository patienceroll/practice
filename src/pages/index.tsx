import React from 'react';
import styles from './index.less';

import { Layout, Menu, Form, Input, Button, Checkbox } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;

class BaseForm extends React.Component {



  render() {

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    }

    return <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='horizontal'
      // colon={false}
      validateMessages={{ required: "用户名不能为空" }}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      // labelCol={{span:5,offset:0}}
      // extra="用户名不能为空"
      // help="这是帮助信息"
      normalize={(value, prevValue, prevValues) => console.log(value,prevValue,prevValues)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        // labelAlign="left"
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住账户</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
      </Button>
      </Form.Item>
    </Form>
  }
}

class App extends React.Component {
  render() {
    return <>
      <div className={styles.header}>
        后台管理项目
      </div>

      <div className={styles.body}>

        <Layout style={{ height: "100%" }}>

          <Sider

            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <UserOutlined />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <VideoCameraOutlined />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <UploadOutlined />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <BarChartOutlined />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <CloudOutlined />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <AppstoreOutlined />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <TeamOutlined />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <ShopOutlined />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="site-layout" style={{ marginLeft: 200 }} >

            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                {/* 表单 */}
                <BaseForm></BaseForm>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  }
}

export default App;
