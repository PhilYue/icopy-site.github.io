window.MathJax = {
    tex2jax: {
      inlineMath: [ ["\\(","\\)"] ],
      displayMath: [ ["\\[","\\]"] ]
    },
    TeX: {
      TagSide: "right",
      TagIndent: ".8em",
      MultLineWidth: "85%",
      equationNumbers: {
        autoNumber: "AMS",
      },
      unicode: {
        fonts: "STIXGeneral,'Arial Unicode MS'"
      }
    },
    showProcessingMessages: false,
    messageStyle: "none"
  };
window.addEventListener('load', function() { 
    var p=localStorage.getItem("data-md-color-primary");
    if (p){
        document.body.setAttribute('data-md-color-primary',p);
    }
    var a=localStorage.getItem('data-md-color-accent');
    if (a){
        document.body.setAttribute('data-md-color-accent',a);
    }
}, false);

//添加空格
pangu.spacingPageBody();

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?8a27e3605ed022be32b28b2c9478a17f";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500683764");

    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();
function go() {var url = $("#urlInput").val();if (!url.startsWith("http")) {url = "http://" + url;}var targetUrl = "https://"+"icopy.site/" + url;try {var urlAddress = new URL(url);window.location = targetUrl;} catch (e) {$("#status").text("URL 不合法");}}


