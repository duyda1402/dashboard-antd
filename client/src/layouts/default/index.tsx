import React from 'react'
import HeaderLayout from './Header'
import { Layout } from 'antd'
type PropsDefaultLayout = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}
const { Content, Footer } = Layout
export default function DefaultLayout(props: PropsDefaultLayout) {
  const { children } = props
  return (
    <Layout style={{ minHeight: '100vh', minWidth: 800 }}>
      <HeaderLayout />
      <Content className="mt-[100px] px-[50px]">{children}</Content>
      <Footer style={{ textAlign: 'center' }}>PageBuilder ©2022 Created by duydoit</Footer>
    </Layout>
  )
}
