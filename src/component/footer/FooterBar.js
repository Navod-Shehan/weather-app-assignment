import { Layout } from 'antd';
import './FooterBar.css'
import React from 'react';
const { Footer } = Layout;

const FooterBar = () => {
    return (
        <Footer
          className='footer-full'
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
    );
};

export default FooterBar;