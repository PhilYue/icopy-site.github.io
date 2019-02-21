<link rel="stylesheet" href="_static/css/main.css">
<div class="s130">
    <div class="form">
        <div class="inner-form">
            <div class="input-field first-wrap">
                <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </div>
                <input id="url" type="text" placeholder="英文文档URL"/>
            </div>
            <div class="input-field second-wrap">
                <button class="btn-search" type="button" onclick='go()' >构建</button>
            </div>
        </div>
        <span class="error" id="status"></span>
        <span class="info">也可以直接在浏览器地址栏URL前加icopy.site/</span>
    </div>
</div>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
    function go() {
        var url = $("#url").val();
        if (!url.startsWith("http")) {
            url = "http://" + url;
        }
        var targetUrl = "http://"+"icopy.site/" + url;
        try {
            var urlAddress = new URL(url);
            window.location = targetUrl;
        } catch (e) {
            $("#status").text("URL 不合法");
        }
    }
</script>

[![Build Status](https://travis-ci.org/chenjiajia/icopy.site.svg?branch=master)](https://travis-ci.org/chenjiajia/icopy.site)

## 提供的服务
* *本站提供英文文档的中文镜像服务,镜像网站每周定期更新*
* *整理汇总各类开发资源*

## 镜像服务指南

!!! tip "地址栏URL前加icopy.site/"
    
    !!! example "比如: https://vertx.io"
        icopy.site/https://vertx.io
    
    !!! example "比如: www.typescriptlang.org/docs/home.html"
        icopy.site/www.typescriptlang.org/docs/home.html

!!! warning "只支持静态文档网站的镜像"
    网站域名或者网页路径中需要包含以下关键词:doc,guide,tutorial,manual,dev
    
    !!! info "对于不满足以上条件的文档"
        需要映射网站别名,请在github提issue
        
!!! warning "镜像网站每周更新"
    内容最多比源站落后7天        


    

 **本文档采用 [mkdocs](https://github.com/mkdocs/mkdocs) 构建**



