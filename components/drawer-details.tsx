import { Col, Card, Row, Descriptions, Image } from 'antd'
import { IMAGE_PATH } from '../config/constants'
const { Meta } = Card

const DrawerDetails = (props: { phone: any }) => {
  return (
    <>
      <Row justify="center">
        <Col>
          <Image preview={false} src={`${IMAGE_PATH}${props.phone.imageFileName}`} />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <h2>{props.phone.name}</h2>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Descriptions title="Product Details" bordered column={1} layout="vertical">
            <Descriptions.Item label="Name">
              {props.phone.name}
            </Descriptions.Item>
            <Descriptions.Item label="Manufacturer">
              {props.phone.manufacturer}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {props.phone.description}
            </Descriptions.Item>
            <Descriptions.Item label="Color">
              {props.phone.color}
            </Descriptions.Item>
            <Descriptions.Item label="Screen">
              {props.phone.screen}
            </Descriptions.Item>
            <Descriptions.Item label="Processor">
              {props.phone.processor}
            </Descriptions.Item>
            <Descriptions.Item label="Ram">
              {props.phone.ram}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  )
}

export default DrawerDetails
