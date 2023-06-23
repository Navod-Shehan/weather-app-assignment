import { Button, Col, Input, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import './Home.css';
import WeatherCard from '../../component/WeatherCard';
import cities from '../../cities.json';

const Home = () => {

  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  let weatherDetails = [];

  // Get dataa from json file
  useEffect(() => {
    const fetchCityCodes = async () => {
      try {
        setCityCodes(cities);
      } catch (error) {
        console.error('Error fetching city codes:', error);
      }
    };
    fetchCityCodes();
  }, []);


  // Get weather data from api
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'aed1a55afdc01c1f12a00d5590ee3a7a';
        const cityCodes = cities.map((city) => city.CityCode).join(',');
        const apiUrl = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${apiKey}`;
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
  }, [cityCodes]);

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
  }

  return (
    <Row>
      {/* header */}
      <Row>
        <Col className='header' span={24}>
          <p style={{ fontSize: '40px', fontWeight: 'bolder' }}>Weather App</p>
        </Col>
      </Row>

      {/* search bar */}
      <Row>
        <Col className='search-bar' span={24}>
          <Space direction="vertical" size="middle">
            <Space.Compact
              style={{
                width: '100%',
              }}
            >
              <Input placeholder='Enter a city' />
              <Button type="primary" >Add City</Button>
            </Space.Compact>
          </Space>
        </Col>
      </Row>
      {weatherDetails.map((data, index) => {
        console.log(data);
      })}
      <Row className='all-card' gutter={[48, 16]} style={{ paddingLeft: '200px' }}>
        {/* <Col xl={2}></Col> */}
        {weatherData.map((data, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={12} xl={10}>
            <WeatherCard data={data} />
          </Col>
        ))}
        {/* <Col xl={2}></Col> */}
      </Row>
    </Row>
  );
};

export default Home;