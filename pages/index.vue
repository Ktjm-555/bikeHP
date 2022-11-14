<script setup>
console.log('hello script setup')


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
          テキストテキストテキストテキストテキストテキストテキスト<br>
          テキストテキストテキストテキストテキストテキストテキスト<br>
          テキストテキストテキストテキストテキストテキストテキスト<br>
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
            <p class="bicycle_detail_title">タイトルタイトル</p>
            <p class="bicycle_detail_text">テキストテキストテキスト</p>
          </div>
        </div>
        <div class="detail">
          <div class="detail_image">
            <img src="~/assets/img/bicycle2.jpg">
          </div>
        </div>
        <div class="detail">
            <div class="detail_image">
              <img src="~/assets/img/bicycle3.jpg">
            </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
  </footer>

</div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
}

</style>
<style lang="scss" scoped>
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
      align-items: center;

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

        .name {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .text {
          font-size: 14px
        }
      }
    }
  }

  .bicycle_area {
    height: 457px;

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
      margin-top: 60px;
      background-color: beige;
      display: flex;
      justify-content: center;

      .detail_box {
        display: flex;
        height: 390px;

        .detail_image {
        width: 262.8px;
        height: 174px;

          img {
            width: 100%;
            height: 100%;
          }

          .bicycle_detail_title {
            margin: 10px auto;
          }
        }
      }

     
    }
  }

  footer {
    height: 20px;
    background-color: blue;
   
  }


}
</style>

