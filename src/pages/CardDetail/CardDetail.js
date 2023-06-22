import { ArrowLeftOutlined, ArrowRightOutlined, CloudOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './CardDetail.css';
import { Link, useParams } from 'react-router-dom';

const CardDetail = () => {
    const { id } = useParams();
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = 'aed1a55afdc01c1f12a00d5590ee3a7a';
                const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=${apiKey}`;
                const cachedData = getCachedData(apiUrl);

                if (cachedData) {
                    setWeatherData(cachedData);
                } else {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    setWeatherData(data.list);
                    cacheData(apiUrl, data.list);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [id]);

    const getCachedData = (key) => {
        const cachedData = localStorage.getItem(key);

        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            if (parsedData.expiresAt > Date.now()) {
                return parsedData.data;
            } else {
                localStorage.removeItem(key);
            }
        }

        return null;
    };

    const cacheData = (key, data) => {
        const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiration
        const cachedData = {
            expiresAt,
            data,
        };

        localStorage.setItem(key, JSON.stringify(cachedData));
    };


    return (

            <Row>
                <Col className='ful-card' style={{ width: '80%', paddingTop: '10%', paddingLeft: '20%' }}>
                    <Card
                        style={{
                            width: '100%',
                            margin: '30px',
                        }}
                    >
                        <Row><ArrowLeftOutlined style={{ fontSize: '30px', padding: '20px' }} /></Row>
                        <Row>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '30px', fontWeight: 'bolder', margin: '0' }}>{weatherData[0]?.name}</p>
                                <p style={{ fontWeight: 'bold' }}>9.19am, Feb 8</p>
                            </Col>
                        </Row>
                        <Row >
                            <Col className='icon-few' span={12} style={{ paddingLeft: '20%' }} >
                                <Row><CloudOutlined style={{ fontSize: '100px' }} /></Row>
                                <Row><p className='few-clouds' style={{ fontWeight: 'bold' }}>{weatherData[0]?.weather.description}</p></Row>
                            </Col>
                            <Col span={12} style={{ paddingLeft: '12%' }}>
                                <p style={{ fontSize: '30px', fontWeight: 'bolder', margin: '0' }}>{weatherData[0]?.main.temp} &deg;C</p>
                                <p style={{ fontWeight: 'bold' }}>Temp Min: {weatherData[0]?.main.temp_min}&deg;C</p>
                                <p style={{ fontWeight: 'bold' }}>Temp Max: {weatherData[0]?.main.temp_max}&deg;C</p>
                            </Col>
                        </Row>
                        <Row style={{ backgroundColor: 'grey', textAlign: 'center' }}>
                            <Col lg={6} xs={5} style={{ fontSize: '12px' }}>
                                <p style={{ fontWeight: 'bold' }}>Pressure: {weatherData[0]?.main.pressure}hPa</p>
                                <p style={{ fontWeight: 'bold' }}>Humidity: {weatherData[0]?.main.humidity}%</p>
                                <p style={{ fontWeight: 'bold' }}>Visibility: 8.0km</p>
                            </Col>
                            <Col lg={1} xs={1} className='vl'></Col>
                            <Col lg={6} xs={5} style={{ fontSize: '12px' }}>
                                <p style={{ fontWeight: 'bold' }}><ArrowRightOutlined /></p>
                                <p style={{ fontWeight: 'bold' }}>{weatherData[0]?.wind.speed}m/s {weatherData[0]?.wind.deg} Degree</p>
                            </Col>
                            <Col lg={1} xs={1} className='vl'></Col>
                            <Col lg={6} xs={5} style={{ fontSize: '12px' }}>
                                <p style={{ fontWeight: 'bold' }}>Sunrise: 6.05 am</p>
                                <p style={{ fontWeight: 'bold' }}>Sunset: 6.05pm</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        



    );
};

export default CardDetail;