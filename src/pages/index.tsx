import React from 'react';
import styles from './index.less';
import 'react-quill/dist/quill.snow.css';
import './fixed.css';

import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Checkbox,
  List,
  Typography,
} from 'antd';

import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import ReactQuill from 'react-quill';
import {
  DragDropContext,
  Droppable,
  DroppableStateSnapshot,
  DroppableProvided,
  Draggable,
} from 'react-beautiful-dnd';

const { Content, Sider } = Layout;

class BaseForm extends React.Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 8 },
    };

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
          fontShift: '每次按下都会在内容最后加1',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="horizontal"
        // colon={false}
        // validateMessages={{ required: "用户名不能为空" }}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { min: 3, message: '长度须大于3' },
            { max: 10, message: '长度须小于10' },
            // { whitespace: true, message:'请输入用户名'}
          ]}
          // labelCol={{span:5,offset:0}}
          // extra="用户名不能为空"
          // help="这是帮助信息"
          normalize={(value, prevValue, prevValues) => {
            console.log(value);
            return value.toString();
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          // labelAlign="left"
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { min: 3, message: '长度须大于6' },
            { max: 10, message: '长度须小于16' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          // labelAlign="left"
          label="邮箱"
          name="email"
          rules={[
            {
              pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
              message: '邮箱不匹配',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          // labelAlign="left"
          label="字段转换"
          name="fontShift"
          rules={[]}
          normalize={value => value.toString() + 1}
        >
          <Input />
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
    );
  }
}

class ListTrace extends React.Component {
  state = {
    listData: () => {
      let i = 0;
      let arr = [];
      while (i < 10) {
        arr.push({ title: `Ant Design Title ${i}` });
        i += 1;
      }
      return arr;
    },
  };

  onBeforeCapture = () => {
    /*...*/
  };

  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {
    // the only one that is required
  };

  render() {
    const { listData } = this.state;
    return (
      <DragDropContext
        onBeforeCapture={this.onBeforeCapture}
        onBeforeDragStart={this.onBeforeDragStart}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId="list">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: 'lightblue',
              }}
              {...provided.droppableProps}
            >
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={listData()}
                renderItem={(item, index) => (
                  <Draggable draggableId={index.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <List.Item>
                          <Typography.Text mark>项</Typography.Text>{' '}
                          {item.title}
                        </List.Item>
                      </div>
                    )}
                  </Draggable>
                )}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    text: '',
  };
  handleChange() {}
  render() {
    return (
      <>
        <div className={styles.header}>后台管理项目</div>

        <div className={styles.body}>
          <Layout style={{ height: '100%' }}>
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
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                {/* 表单部分 */}
                <div
                  className="site-layout-background"
                  style={{ padding: 24, textAlign: 'center' }}
                >
                  {/* 表单 */}
                  <BaseForm></BaseForm>
                </div>

                {/* 列表部分 */}
                <ListTrace></ListTrace>

                {/* 富文本编辑器 */}
                <ReactQuill
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </Content>
            </Layout>
          </Layout>
        </div>
      </>
    );
  }
}

export default App;
