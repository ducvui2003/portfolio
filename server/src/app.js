import express from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: process.env.ORIGIN_URL.split(','),
  optionsSuccessStatus: 200 
}

const proxyMiddleware = createProxyMiddleware({
    target: process.env.API_NOTION_URL,
    changeOrigin: true,
    pathRewrite:{
       '^/api': '/',
    },
    headers:{
      'Authorization': `Bearer ${process.env.API_NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    }
  });

app.use(cors(corsOptions));
app.use('/api', proxyMiddleware)
app.use(express.json())


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});