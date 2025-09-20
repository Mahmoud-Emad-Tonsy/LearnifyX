import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/authReducer'
import { Form, Input, Button, Checkbox, Divider } from 'antd'
import { MailOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import {
  PageContainer,
  FormContainer,
  FormWrapper,
  FormTitle,
  FormItemFlex,
  SocialButton,
} from './style'

const Login = () => {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    if (values.remember) {
      window.localStorage.setItem(
        'eduhub-remember-cred',
        JSON.stringify({ remember: values.remember, email: values.email })
      )
    } else {
      window.localStorage.setItem(
        'eduhub-remember-cred',
        JSON.stringify({ remember: false })
      )
    }
    dispatch(login(values))
  }

  const getInitialValues = () => {
    return JSON.parse(window.localStorage.getItem('eduhub-remember-cred'))
  }

  return (
    <PageContainer>
      <FormContainer>
        <FormWrapper>
          <Form
            name="login"
            onFinish={onFinish}
            initialValues={getInitialValues()}
            scrollToFirstError
          >
            <FormTitle>Welcome Back</FormTitle>
            <p>
              New here? <Link to="/register">Create an account</Link>
            </p>

            <Form.Item
              name="email"
              rules={[
                { type: 'email', message: 'Please enter a valid E-mail!' },
                { required: true, message: 'E-mail is required!' },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Password is required!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <FormItemFlex>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/forget-password">Forgot Password?</Link>
            </FormItemFlex>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>

          </Form>
        </FormWrapper>
      </FormContainer>
    </PageContainer>
  )
}

export default Login
