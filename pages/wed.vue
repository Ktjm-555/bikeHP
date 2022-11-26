<template>
  <div>
    <header id="header">
    <div class="inner wrapper">
      <h1 class="logo">
        <a href="index.html"><img class="logo" src="~/assets/img2/logo.svg"></a>
      </h1>
      <nav>
        <ul>
          <li><a href="#news">NEWS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#business">BUSINESS</a></li>
          <li><a href="#company">COMPANY</a></li>
        </ul>
      </nav>
    </div>
    <a class="contact" href="#">資料請求</a>
  </header>
  <main>
    <div id="mainvisual">
      <img src="~/assets/img2/mainvisual.jpg" alt="">
    </div>

    <section id="news" class="wrapper">
      <h2 class="section-title">
        <span class="en">NEWS</span>
        <span class="ja">ニュース</span>
      </h2>

      <ul>
        <li>
          <div class="data-area">
            <time datetime="2021-01-01">2021.01.01</time>
          </div>
        </li>
      </ul>
    </section>
  </main>
  </div>
  
</template>
<style lang="scss">
html {
  font-size: 100%;
  margin: 0;

  body {
    margin: 0;
    background-color: #f0f0f0;
    color: #000;
    font-size: 0.875rem;
  }
}
</style>
<style lang="scss" scoped>
a {
  color: #000;
  font-size: 0.875rem;
}

img {
  max-width:  100%;
  vertical-align: bottom;
}

li {
  list-style: none;
}

.logo {
  width: 100px;
  line-height: 1px;

  a {
    display: block;
  }
}

.section-title .en {
  display: block;
  font-size: 2.25rem;
  letter-spacing: 0.3em;
  margin-bottom: 10px;
}

.section-title .ja {
  display: block;
  font-size: 0.875rem;
  margin-bottom: 36px;
}

.wrapper {
  width: 100%;
  max-width: 1032px;
  padding: 0 16px; // TODO: なぜpaddingつける？
  margin: 0 auto;
}

 // ヘッダー

#header {
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;

.inner {
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    
    li {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.contact {
  width: 200px;
  height: 80px;
  line-height: 80px;
  background-color: #000;
  color: #fff;
  font-size: 0.75rem;
  display: inline-block;
  text-align: center;
}
.contact:hover {
  background-color: #333;
}
}

// mainvisual

#mainvisual {
  margin-bottom: 120px;

  img {
    width: 100%;
    height: calc(100vh - 80px);
    // 高さが100vhに合わせたいが、へったー分の80pxを引く。
    object-fit: cover;
  }
}

// news

#news {
  margin-bottom: 120px;

   list {

   }
}
 



</style>