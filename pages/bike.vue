<script setup>
</script>
<template>
<div>
<Header>
</Header>
  <img class="image_area" src="~/assets/img/mainvisual.jpg" alt="自転車の大きめの写真">
  
  <div class="about_area">
    <div class="about_title">
      <h1><span class="title">About</span></h1>
    </div>
    <div class="about_detail">
      <div class=profile_image>
        <img src="~/assets/img/about.jpg">
      </div>
      <div class="profile_text">
        <p class="name">
          KITJIMA KAHO
        </p>
        <p class="text">
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミー
        </p>
      </div>
    </div>
  </div>
    
  <div class="bicycle_area">
    <div class="bicycle_title">
      <h1><span class="title">Bicycle</span></h1>
    </div>
    <div class="bicycle_detail">
      <div class="detail_box">
        <div class="detail">
          <div class="detail_image">
            <img src="~/assets/img/bicycle1.jpg">
          </div>
          <div class="datail_text">
            <p class="bicycle_detail_title">タイトルタイトル</p>
            <p class="bicycle_detail_text">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
</p>
          </div>
        </div>
        <div class="detail">
          <div class="detail_image">
            <img src="~/assets/img/bicycle2.jpg">
          </div>
          <div class="datail_text">
            <p class="bicycle_detail_title">タイトルタイトル</p>
            <p class="bicycle_detail_text">テキストテキストテキスト</p>
          </div>
        </div>
        <div class="detail">
            <div class="detail_image">
              <img src="~/assets/img/bicycle3.jpg">
            </div>
            <div class="datail_text">
              <p class="bicycle_detail_title">タイトルタイトル</p>
              <p class="bicycle_detail_text">テキストテキストテキスト</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    © 2020 Profile
  </footer>

</div>
</template>
<style lang="scss" scoped>

* {
  padding: 0;
  margin: 0;
}

</style>
<style lang="scss" scoped>
html {

  div {

    .image_area {
      height: 600px;
      width: 100%;
      object-fit: cover;
      display: block;
    }

    .about_area {
      height: 395px;

      .about_title {
        height: 198px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font: normal normal bold 32px Meiryo;
          color: #383E45;
          opacity: 1;
          font-size: 32px;

          .title {
            padding: 5px;
            border-bottom: 1px solid #383E45;
          }
        }
      }

      .about_detail {
        height: 197px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;

        .profile_image {
          width: 100px;
          height: 100px;

          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .profile_text {
          margin-left: 30px;
          margin-bottom: 10px;
          max-width: 533px;
          height: 80px;

          .name {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .text {
            max-height: 100%;
            overflow: auto;
            overflow-x: hidden;
            font-size: 14px;
          }
        }
      }
    }

    .bicycle_area {
      height: auto;

      .bicycle_title {
        height: 48px;
        display: flex;
        justify-content: center;

        h1 {
          font: normal normal bold 32px Meiryo;
          color: #383E45;
          opacity: 1;
          font-size: 32px;

          .title {
            padding: 5px;
            border-bottom: 1px solid #383E45;
          }
        }
      }

      .bicycle_detail {
        margin: 60px 10px 10px 10px;
        display: flex;
        justify-content: center;
        max-height: 100%;
        overflow: auto;

        .detail_box {
          display: flex;

          .detail {
            margin: 0 8px;

            .detail_image {
              width: 262.8px;
              height: 174px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .datail_text {
              text-align: center;
              width: 262.8px;

              .bicycle_detail_title {
                font-weight: bold;
                padding: 10px 0;
              }
            }
          }
        }
      }
    }

    footer {
      height: 20px;
      width: 100%;
      text-align: center;
    }
  }
}

@media screen and (max-width:600px)   {
  html {

    div {
      .image_area {
        object-position:0 50%;
      }

      .about_area {
        height: auto;
        margin-bottom: 100px; 

        .about_title {
          height: 188px;
        }

        .about_detail {
          display: block;
          height: auto;
          margin: 0 15px;

          .profile_image {
            margin: 0 auto;
          }

          .profile_text {
            height: auto;
            margin: 0 15px;

            .name {
             margin-top: 10px;
            }

            .text {
              height: 100px;
            }
          }
        }
      }

      .bicycle_area {
        .bicycle_detail {
          .detail_box {
            display: block;

            .detail {
              &:last-child {
                margin-bottom: 100px;
              }

              .detail_image {
                min-width: 345px;
                width: 100%;
                min-height: 228px;
                height: 100%;
              }

              .datail_text {
                width: auto;
                margin-bottom: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

