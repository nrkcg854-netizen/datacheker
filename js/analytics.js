// Google Tag Manager 統合スクリプト
// GTMからGA4を管理する構成
const GTM_ID = 'GT-5DDML738';
const GA_MEASUREMENT_ID = 'G-Z9ZCQB6GTL';

// GTM スクリプト読み込み
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',GTM_ID);

// dataLayer初期化
window.dataLayer = window.dataLayer || [];
