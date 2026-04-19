```javascript
// Google Analytics 4 共通スクリプト
const GA_MEASUREMENT_ID = 'G-Z9ZCQB6GTL'; 

// gtag.js の読み込み
const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(script);

// 初期化設定
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);


```
