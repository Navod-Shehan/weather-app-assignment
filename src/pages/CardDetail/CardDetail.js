import { ArrowLeftOutlined, ArrowRightOutlined, CloudOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './CardDetail.css';
import { useParams } from 'react-router-dom';
import { getCachedData } from '../../utils/CacheUtil';


const CardDetail = () => {
    const { id } = useParams();
    const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
        const cachedData = getCachedData("data");
        const data = cachedData.find((item) => item.id == id)
        setWeatherData(data);
    }, [id]);

    return (

        <Row className='container'>
            <Col span={24} className='ful-card'>
                <Card className='ful-card-main'>
                    <Row className='row-head'>
                        <Col span={24}>
                            <Row><ArrowLeftOutlined /></Row>
                            <Row className='city-name1'>
                                <Col span={24}>
                                    <span>{weatherData?.name}</span>
                                </Col>
                            </Row>
                            <Row className='time-date1'>
                                <Col span={24} className='time-date'>
                                    <span>9.19am, Feb 8</span>
                                </Col>
                            </Row>

                            <Row className='ful-card-1'>
                                <Col span={12}>
                                    <Row>
                                        <Col span={24}>
                                            <CloudOutlined className='cloud-icon' />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} className='time-date1'>
                                            <span>
                                                {weatherData?.weather && weatherData.weather.length > 0 ? weatherData.weather[0].description : ''}
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        <Col span={24} className='city-name1'>
                                            <span >{weatherData?.main?.temp} &deg;C</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} className='time-date1'>
                                            <span >Temp Min: {weatherData?.main?.temp_min}&deg;C</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24} className='time-date1'>
                                            <span>Temp Max: {weatherData?.main?.temp_max}&deg;C</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Row className='footer-content'>
                                <Col lg={8}>
                                    <Row>
                                        <Col span={24}>
                                            <span>Pressure: {weatherData?.main?.pressure}hPa</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <span>Humidity: {weatherData?.main?.humidity}%</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <span>Visibility: 8.0km</span>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={8}>
                                    <Row>
                                        <Col span={24}>
                                            <ArrowRightOutlined />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <span>{weatherData?.wind?.speed}m/s {weatherData?.wind?.deg} Degree</span>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={8}>
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
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>




    );
};

export default CardDetail;