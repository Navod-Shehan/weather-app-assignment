import { ArrowRightOutlined, CloudOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React from 'react';
import './WeatherCard.css';
import { Link } from 'react-router-dom';

const WeatherCard = (data) => {
    const city=data.data
    console.log(city);

    return (
        <Row >
            <Col style={{width:'100%'}}>
            <Link to={{ pathname: `/cardDetails/${city.id}`, state: city }}>
                
                <Card
                    style={{
                        width: '100%',
                        margin: '30px',
                    }}
                >
                    <Row >
                        <Col span={12} style={{ textAlign: 'center' }}>
                            <p style={{fontSize:'30px', fontWeight:'bolder'}}>{city.name}</p>
                            <p style={{fontWeight:'bold'}}>9.19am, Feb 8</p>
                            <p style={{fontWeight:'bold'}}><CloudOutlined style={{ paddingRight: '10px' }} />{city.weather.description}</p>
                        </Col>
                        <Col span={12} style={{ textAlign: 'center' }}>
                            <p style={{fontSize:'30px', fontWeight:'bolder'}}>{city.main.temp} &deg;C</p>
                            <p style={{fontWeight:'bold'}}>{city.main.temp}&deg;C</p>
                            <p style={{fontWeight:'bold'}}>Temp Max: 28&deg;C</p>

                        </Col>
                    </Row>
                    <Row style={{ backgroundColor: 'grey', textAlign: 'center' }}>
                        <Col lg={6} xs={6} style={{fontSize:'12px'}}>
                            <p style={{fontWeight:'bold'}}>Pressure: 1018hPa</p>
                            <p style={{fontWeight:'bold'}}>Humidity: 70%</p>
                            <p style={{fontWeight:'bold'}}>Visibility: 8.0km</p>
                        </Col>
                        <Col lg={1} className='vl'></Col>
                        <Col lg={6} xs={6} style={{fontSize:'12px'}}>
                            <p style={{fontWeight:'bold'}}><ArrowRightOutlined /></p>
                            <p style={{fontWeight:'bold'}}>4.0m/s 120 Degree</p>
                        </Col>
                        <Col lg={1} className='vl'></Col>
                        <Col lg={6} xs={6} style={{fontSize:'12px'}}>
                            <p style={{fontWeight:'bold'}}>Sunrise: 6.05 am</p>
                            <p style={{fontWeight:'bold'}}>Sunset: 6.05pm</p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Card>
                </Link>
            </Col>
        </Row>

    );
};

export default WeatherCard;