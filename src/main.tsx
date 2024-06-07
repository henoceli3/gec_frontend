import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { antdToken, styleComponentsTheme } from './config/Theme.ts';
import locale from "antd/locale/fr_FR";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={styleComponentsTheme}>
      <ConfigProvider locale={locale} theme={{ token: antdToken }}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
