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

      <ul class="list">
        <li>
          <div class="data-area">
            <time datetime="2021-01-01">2021.01.01</time>
            <span>NEWS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
        <li>
          <div class="data-area">
            <time datetime="2021-01-01">2021.01.01</time>
            <span>PRESS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
        <li>
          <div class="data-area">
            <time datetime="2021-01-01">2021.01.01</time>
            <span>NEWS</span>
          </div>
          <p>タイトルタイトルタイトルタイトル</p>
        </li>
      </ul>
    </section>

    <seciton id="about">
      <div class="img">
        <img src="~/assets/img2/about.jpg">
      </div>

      <div class="text">
        <h2 class="section-title">
            <span class="en">ABOUT</span>
            <span class="ja">私たちについて</span>
        </h2>
        <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
        </p>
        <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
        </p>
        <p>
          テキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </seciton>

    <section id="business" class="wrapper">
      <h2 class="section-title">
        <span class="en">BUSINESS</span>
        <span class="ja">事業内容</span>
      </h2>

      <div class="flex">
        <div class="left">
          <div class="item">
            <p class="title">Web制作・マーケティング</p>
            <img src="~/assets/img2/business1.jpg" alt="">
          </div>
          <div class="item">
            <p class="title">インターネットメディア事業</p>
            <img src="~/assets/img2/business2.jpg" alt="">
          </div>
        </div>
        <div class="right">
          <div class="item">
            <p class="title">プロモーション企画・制作</p>
            <img src="~/assets/img2/business3.jpg" alt="">
          </div>
          <div class="item">
            <p class="title">ソーシャル企画・運営</p>
            <img src="~/assets/img2/business4.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <sction id="company" class="wrapper">
      <div class="text">
        <h2 class="section-title">
          <span class="en">COMPANY</span>
          <span class="ja">会社情報</span>
        </h2>
        <dl class="info">
          <dt>会社名</dt>
          <dd>ウェブエンターテイメントデザイン株式会社</dd>
          <dt>所在地</dt>
          <dd>東京都渋谷区桜丘町99-9 West Building 3F</dd>
          <dt>代表</dt>
          <dd>ＸＸＸＸＸＸ</dd>
          <dt>設立</dt>
          <dd>2021年1月1日</dd>
          <dt>資本金</dt>
          <dd>3,000,000円</dd>
          <dt>事業内容</dt>
          <dd>Web制作・マーケティング</dd>
          <dd class="add">インターネットメディア事業</dd>
          <dd class="add">プロモーション企画・制作</dd>
          <dd class="add">ソーシャル企画・運営</dd>
        </dl>
      </div>
      <div class="img">
        <img src="~/assets/img2/company.jpg" alt="">
      </div>
    </sction>
  </main>
   <footer id="footer">
      <div class="wrapper">
        <div class="flex">
          <div class="logo">
            <img src="~/assets/img2/logo.svg" alt="Web Entertainment Design">
          </div>
          <div class="info">
            <p>
              Web Entertainment Design Inc.<br>
              West Building 3F<br>
              9-99 Sakuragaokacho Shibuya-ku<br>
              Tokyo, Japan 150-0031
            </p>
            <p>T/99-9999-9999</p>
          </div>
        </div>
        <p class="copyright">&copy; Web Entertainment Design Inc.</p>
      </div>
    </footer>
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
p {
  margin: 0;
}

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
  max-width: 1032px; // ブレイクポイント？それ以下になったら、小さくなっていく。それまでは体裁を保つ？
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

  .list {
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      // 親要素を100%として3等分したwidthを持つ。
      width: calc(100%/3); // marginがない場合は、/3で良い.
      border-right: solid 1px #000;
      padding: 10px 20px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }

      .data-area {
        margin-bottom: 16px;

        span {
          width: 50px;
          height: 20px;
          line-height: 20px;
          background-color: #000;
          color: #fff;
          display: inline-block;
          font-size: 0.75rem;
          margin-left: 10px;
          text-align: center;
        }
      }
    }
  }
}

// About 

#about {
  display: flex;
  margin-bottom: 120px;

  .img {
    width: 55%;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .text {
    width: 45%;
    padding: 180px 5% 0 5%; 
    //可変%にしておくといい感じで縮んでも横の余白のバランス取れる？ 
    // h2のmarginを考慮。写真の真ん中辺からスタート。
    
    p {
      line-height: 2.2;
    }
  }
}

// Business 
#business {
  margin-bottom: 120px;

  .flex {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;

    .item {
      margin-bottom: 50px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .left {
      width: 46%;
      margin-top: 100px
    }

    .right {
      width: 46%;
    }

    .title {
      margin: 0 0 10px 18px;
      position: relative;

      &::before {
        content: "";
        width: 8px;
        height: 1px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: -18px; // -とタイトルの距離
      }
    }
  }
}

// Company
/*
テキストと画像はpositionを使って配置
子要素の「position: absolute;」で高さがなくなるため、
「height: 750px;」を指定して高さを確保
*/
#company {
  margin-bottom: 120px;
  height: 750px;
  display: flex;
  align-items: center;
  position: relative;

  .text {
    width: 55%;
    background-color: #fff;
    padding: 100px 8% 100px 6%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .img {
    width: 53%;
    position: absolute;
    top: 115px;
    right: 0;;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    dt {
      width: 20%;
      // margin-top: 10px;

      &:first-of-type {
        margin-top: 0;
      }
    }

    dd {
      width: 80%;
      margin-top: 10px;

      &:first-of-type {
        margin-top: 0;
      }
    }

    .add {
      // margin-left: 20%;
    }
  }
}

// fppter

#footer {
  background-color: #fff;
  padding-bottom: 20px;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;

    .logo {
      margin-right: 0;
    }

    .copyright {
      font-size: 0.625rem;
    }
  }
}




</style>