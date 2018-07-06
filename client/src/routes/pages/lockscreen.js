import React from 'react'
import {Row,Col,Card,Switch} from 'antd'
import './lockscreen.less'
import SemanticInput from '../../components/semanticui/semantic-input'

   function changeLock() {
      dispatch({type: 'app/changeLock'})
    }

const LockPage = (props) => <div className="lock-container">
<Row type="flex"  justify="space-around" align="middle">
    <Col xs={24} md={8} lg={8}>
        <Card className="lock-screen">
        <img src="./assets/lamp.svg"/>
        <SemanticInput />   
        </Card>
    </Col>
    </Row>
</div>

export default LockPage
