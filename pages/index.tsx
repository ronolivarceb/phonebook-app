import Head from 'next/head'
import { Drawer, Row, Col, Layout } from 'antd'
import MobileCard from '../components/mobile-card'
import { GetStaticProps } from 'next'
import { SERVER_URL } from '../config/constants'
import { useState } from 'react'
import DrawerDetails from '../components/drawer-details'

const { Header, Content } = Layout

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${SERVER_URL}/phones`)
  const data = await res.json()
  return {
    props: { phones: data.data.phones },
  }
}

export default function Home({ phones }: any) {
  const [isDrawerVisible, setDrawerVisible] = useState(false)
  const [activePhone, setActivePhone] = useState(phones[0])
  return (
    <>
      <Head>
        <title>Phone Catalog</title>
      </Head>
      <Layout>
        <Header>
          <h1 className="header-text">Phone Catalog</h1>
        </Header>
        <Content className="main-content-container">
          <Row gutter={[18, 18]} justify="space-around">
            {phones.map((phone: any) => (
              <Col
                onClick={() => {
                  setActivePhone(phone)
                  setDrawerVisible(true)
                }}
              >
                <MobileCard phone={phone} key={phone.id} />
              </Col>
            ))}
          </Row>
          <Drawer
            width="80vw"
            placement="right"
            closable={true}
            onClose={() => setDrawerVisible(false)}
            visible={isDrawerVisible}
          >
            <DrawerDetails phone={activePhone} />
          </Drawer>
        </Content>
      </Layout>
    </>
  )
}
