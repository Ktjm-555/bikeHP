<template>
    <header>
    <div class="header_container">
      <p class="logo_wrapper">
        <img class="logo" src="~/assets/img/logo.svg" alt="サイトのロゴ">
      </p>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Bicycle</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  height: 60px;
  background-color: #ffff;
  display: flex;
  align-items: center;

  .header_container {
    width: 100%;
    display: flex;

    .logo_wrapper {
      width: 50%;
      display: flex;
      justify-content: center;

      .logo {
        width: 120px;
        height: 40px;
      }
    }

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      display: flex;

      li {
        display: inline;

        a {
          // 片方にかけるのはレスポンシブで苦労するため、
          // やりたくないが、この場合は、左の空欄(margin)を揃えたいため仕方ない。
          margin-left: 30px;
          font: normal normal normal 14px/21px Meiryo;
          letter-spacing: 0px;
          color: #24292E;
          opacity: 1;
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width:600px)   {
  header {

    .header_container {
    
      .logo_wrapper {
        justify-content: start;
        margin: 10px;
      }
      
      nav {
        justify-content: flex-end;
        margin: 10px;
      }
    }
  }
}
</style>