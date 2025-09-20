import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Select } from 'antd'
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { register } from '../../reducers/authReducer'
import { message } from 'antd'

import {
  PageContainer,
  FormContainer,
  FormWrapper,
  FormTitle,
  FormItemFlex,
} from './style'

const Registration = () => {
  const dispatch = useDispatch()
  const navigate = useHistory()

const onFinish = async (values) => {
  try {
    const result = await dispatch(register(values))
    // Check for error in result or payload
    const errorMsg =
      result?.error ||
      result?.payload?.error ||
      (result?.payload && typeof result.payload === 'string' ? result.payload : null)
    if (errorMsg) {
      message.error(errorMsg)
      return
    }
    message.success('Registration successful!')
    navigate.push('/login')
  } catch (e) {
    message.error("Can't register: " + (e.message || 'Unknown error'))
  }
}


  return (
    <PageContainer>
      <FormContainer>
        <FormWrapper>
          <Form
            name="register"
            onFinish={onFinish}
            initialValues={{ remember: false }}
            scrollToFirstError
          >
            <FormTitle>Create Account</FormTitle>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Please enter your full name' },
                { min: 3, message: 'Name must be at least 3 characters' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Full Name" />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please enter your username' },
                { min: 3, message: 'Username must be at least 3 characters' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { type: 'email', message: 'Please enter a valid E-mail' },
                { required: true, message: 'E-mail is required' },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-mail" />
            </Form.Item>

            <Form.Item name="role">
              <Select placeholder="Select Role">
                <Select.Option value="instructor">Instructor</Select.Option>
                <Select.Option value="student">Student</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="mobile">
              <Input prefix={<MobileOutlined />} placeholder="Mobile (optional)" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="passwordConfirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      'Passwords do not match!'
                    )
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>

            {/* <Form.Item
              name="code"
              rules={[
                { required: true, message: 'Please enter your code' },
                { len: 6, message: 'Code must be 6 characters' },
              ]}
            >
              <Input prefix={<CodeSandboxOutlined />} placeholder="Code" />
            </Form.Item> */}

           <FormItemFlex>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('You must accept the agreement'),
                  },
                ]}
              >
                <Checkbox>
                  I have read the <Link to="#">agreement</Link>
                </Checkbox>
              </Form.Item>
            </FormItemFlex> 

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>

  
          </Form>
        </FormWrapper>
      </FormContainer>
    </PageContainer>
  )
}

export default Registration
