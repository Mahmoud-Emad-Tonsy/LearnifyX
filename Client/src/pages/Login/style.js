import styled from 'styled-components'
import { Form, Button } from 'antd'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    z-index: 0;
  }
`

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  width: 28rem;
  z-index: 1;
`

export const FormWrapper = styled.div`
  padding: 3rem 2rem;
`

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const FormItemFlex = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #555;
  font-weight: 500;
  border: none;
  &:hover {
    background-color: #e0e0e0;
  }
`
