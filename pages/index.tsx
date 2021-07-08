import Head from 'next/head'
import { Row, Col, Layout } from 'antd'
import MobileCard from '../components/mobile-card'
import { GetStaticProps } from 'next'
import {IMAGE_PATH, SERVER_URL} from '../config/constants'

const { Header, Content } = Layout

export const getStaticProps :GetStaticProps = async () => {
  const res = await fetch(`${SERVER_URL}/phones`)
  const data = await res.json()
  return {
    props: { phones: data.data.phones },
  }
}

export default function Home({ phones }: any) {
  // console.log(phones)
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
              <Col>
                <MobileCard key={phone.id} image={`${IMAGE_PATH}${phone.imageFileName}`} name={phone.name} manufacturer={phone.manufacturer} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </>
  )
}
