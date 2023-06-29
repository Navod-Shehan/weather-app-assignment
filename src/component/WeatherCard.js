import { ArrowRightOutlined, CloudOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React from 'react';
import './WeatherCard.css';
import { Link } from 'react-router-dom';


const WeatherCard = (data) => {
    const city = data.data
    console.log(city);

    return (
        // Card component
        <Row >
            <Col className='card-container'>
                <Link to={{ pathname: `/cardDetails/${city.id}`, state: city }}>

                    <Card className='card-main'>
                        <Row className='main-row'>
                            <Col lg={12} className='card-sub'>
                                <Row>
                                    <Col span={24} className='city-name'>
                                        <span>{city.name}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} className='time-date'>
                                        <span>9.19am, Feb 8</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} className='weather-description'>
                                        <span><CloudOutlined />{city.weather.description}</span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12} className='card-sub'>
                                <Row>
                                    <Col span={24} className='city-name'>
                                        <span>{city.main.temp} &deg;C</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} className='time-date'>
                                        <span>Temp Min: {city.main.temp_min} &deg;C</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} className='weather-description'>
                                        <span>Temp Max: {city.main.temp_max} &deg;C</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='footer-content'>
                            <Col lg={8} xs={8}>
                                <Row>
                                    <Col span={24}>
                                        <span>Pressure: {city.main.pressure}Pa</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <span>Humidity: {city.main.humidity}%</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <span>Visibility: {city.visibility}km</span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={8} xs={8}>
                                <Row>
                                    <Col span={24}>
                                        <ArrowRightOutlined />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <span>{city.wind.speed}m/s {city.wind.deg} Degree</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8} xs={8}>
                                <Row>
                                    <Col span={24}>
                                        <span>Sunrise: 6.05 am</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <span>Sunset: 6.05pm</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Link>
            </Col>
        </Row>

    );
};

export default WeatherCard;