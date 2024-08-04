<style>
.container {
  padding: 0;
}
.headerBorder {
  border-bottom: 1px solid rgb(240, 240, 240);
}
.header div {
  font-size: 0.875rem;
  font-weight: 400;
}
.firstDiv,
.firstDiv > i {
  color: #138184;
}

.dropdownList div {
  text-wrap: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  border-right: 1px solid rgb(240, 240, 240);
}
.searchBg {
  width: 100%;
  height: 334px;
  background-image: linear-gradient(
      rgba(51, 51, 51, 0.2),
      rgba(51, 51, 51, 0.2)
    ),
    url("https://image.kkday.com/v2/image/get/s1.kkday.com/campaign_3631/20240617102328_T6llo/jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* position: relative; */
}
.searchBg > img {
  width: 100%;
}
.searchBanner {
  width: 640px;
  /* position: absolute; */
}
.searchBanner > div {
  display: flex;
  justify-content: center;
}
.searchBanner h1,
.searchBanner h5 {
  text-wrap: nowrap;
  font-weight: 700;
  color: white;
}
.cardsDiv {
  padding-top: 40px;
}

section > div.container > div > h4 {
  font-weight: 700;
}
.py10 {
  padding: 10px 0px;
}
.cards {
  padding: 10px 0px;
}
.cards div.card:nth-child(-n + 6) {
  width: 177.5px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
}

.cards div:nth-child(-n + 6) > div:nth-child(2) {
  padding: 14px 12px;
  font-weight: 700;
}
.newsDiv > .new > img {
  width: 370px;
  border-radius: 6px;
}
</style>

<template>
  <section class="headerBorder py-2">
    <div class="d-flex justify-content-between header container">
      <div>
        <img
          width="100"
          height="40"
          src="https://cdn.kkday.com/pc-web/assets/img/kkday_logo_final.svg"
        />
      </div>
      <div class="col-auto row gx-2 align-items-center">
        <div class="col-auto firstDiv">
          <i class="fa-solid fa-mobile-screen-button"></i>
          下載App享優惠
        </div>
        <div class="col-auto d-flex align-items-center">
          <span class="col-auto">繁體中文</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="col-auto d-flex align-items-center">
          <span class="col-auto">TWD</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="col-auto">
          <img
            width="22"
            height="22"
            src="https://cdn.kkday.com/pc-web/assets/img/ic_profile_cart.svg"
          />
        </div>
        <div class="col-auto">登入/註冊</div>
      </div>
    </div>
  </section>
  <section>
    <div class="container d-flex justify-content-around dropdownList py-3">
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-location-dot"></i>
        <span class="col-auto">目的地</span>
      </div>
      <div class="col-auto">最新優惠</div>
      <div class="col-auto">機票+</div>
      <div class="col-auto">WiFi & SIM 卡</div>
      <div class="col-auto">交通</div>
      <div class="col-auto">景點門票</div>
      <div class="col-auto">行程 & 體驗</div>
      <div class="col-auto">租車</div>
      <div class="col-auto">住宿</div>
      <div class="col-auto">美食</div>
      <div class="col-auto">台灣高鐵</div>
      <div class="col-auto">郵輪</div>
      <div class="col-auto">旅行服務</div>
      <div class="col-auto">購物</div>
    </div>
    <div class="searchBg">
      <div
        class="container d-flex justify-content-center align-items-center h-100"
      >
        <div class="searchBanner">
          <div class="mb-2">
            <h1>全世界最棒的旅遊體驗</h1>
          </div>
          <div class="mb-3">
            <h5>帶你深入探索有趣又獨特的旅遊體驗行程</h5>
          </div>
          <div>
            <input
              type="text"
              placeholder="搜尋景點、地點或城市"
              name=""
              id=""
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div>
        <h4>熱門活動分類</h4>
      </div>
      <div class="cards d-flex justify-content-between">
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095003_C1d95/jpg"
              alt="KKday自組團"
            />
          </div>
          <div>KKday自組團</div>
        </div>
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095119_9d94w/jpg"
              alt="全台展覽地圖"
            />
          </div>
          <div>全台展覽地圖</div>
        </div>
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095148_WVibV/jpg"
              alt="旅遊攻略"
            />
          </div>
          <div>旅遊攻略</div>
        </div>
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095215_c4ALE/jpg"
              alt="航空自由行、機票"
            />
          </div>
          <div>航空自由行、機票</div>
        </div>
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095250_2iLCx/jpg"
              alt="會員商城"
            />
          </div>
          <div>會員商城</div>
        </div>
        <div class="card">
          <div>
            <img
              class="w-100"
              src="https://image.kkday.com/v2/image/get/w_300%2Ch_225%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3724/20240726095309_NyvOZ/jpg"
              alt="銀行優惠"
            />
          </div>
          <div>銀行優惠</div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div>
        <h4>最新旅遊優惠</h4>
      </div>
      <div class="newsDiv d-flex justify-content-between py10">
        <div class="new">
          <img
            src="https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3664/20240703202026_6WZAd/jpg"
            alt=""
          />
        </div>
        <div class="new">
          <img
            src="https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3732/20240802024936_YAb4C/jpg"
            alt=""
          />
        </div>
        <div class="new">
          <img
            src="https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_3313/20240205094419_6SLP3/jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
