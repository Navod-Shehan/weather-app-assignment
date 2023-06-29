import { Button, Col, Input, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import './Home.css';
import WeatherCard from '../../component/WeatherCard';
import cities from '../../cities.json';
import env from "react-dotenv";
import { API_URL } from '../../utils/APIHelper';
import { setCacheData, getCachedData } from '../../utils/CacheUtil';


const Home = () => {

  const [weatherData, setWeatherData] = useState([]);

  // Get weather data from api
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = env.API_KEY;
        const cityCodes = cities.map((city) => city.CityCode).join(',');
        const apiUrl = `${API_URL}?id=${cityCodes}&units=metric&appid=${apiKey}`;
        const cachedData = getCachedData("data");

        if (cachedData) {
          setWeatherData(cachedData);
        } else {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeatherData(data.list);
          setCacheData("data", data.list);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <Row className='home-container'>
      {/* header */}
      <Row>
        <Col className='header' span={24}>
          <span>Weather App</span>
        </Col>
      </Row>

      {/* search bar */}
      <Row>
        <Col className='search-bar' span={24}>
          <Space direction="vertical" size="middle">
            <Space.Compact>
              <Input placeholder='Enter a city' />
              <Button type="primary" >Add City</Button>
            </Space.Compact>
          </Space>
        </Col>
      </Row>

      <Row className='all-card' gutter={[48, 16]}>
        {weatherData.map((data, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={12} xl={10}>
            <WeatherCard data={data} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Home;