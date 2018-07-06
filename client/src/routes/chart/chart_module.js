import React from 'react'
import SimpleLineChart from '../../components/chart/line-chart'
import CustomShapeBarChart from '../../components/chart/bar-chart'
import SimpleAreaChart from '../../components/chart/area-chart'


import {
    Table,
    Row,
    Col,
    Button,
    Card,
    Icon
} from 'antd'

const chartPage = () => <div>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <SimpleLineChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <CustomShapeBarChart/>
            </Card>
        </Col>
    </Row>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card>
                <SimpleAreaChart/>
            </Card>
        </Col>
    </Row>
</div>
export default chartPage