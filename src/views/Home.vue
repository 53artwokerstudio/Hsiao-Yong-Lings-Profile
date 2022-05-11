<template>
  <div class="home ContainerSpacing">

    <img class="myPhoto" alt="Hello!期待您的聯繫！" src="../assets/img/myPhoto.png" />

    <div>
      <div class="InfoTitle ItemSpacing">
        <h1>蕭詠齡</h1>
        <h2>Hsiao Yong Ling</h2>
      </div>
      <div class="ItemSpacing">
        <p>
          嗨！我是蕭詠齡，長年接案經驗使我可以獨立完成專案，也總是與客戶、同事維持良好的合作關係。
          <br/>
          <br/>
          熟悉 <span>HTML5 / CSS3 / ES6</span> 前端技術，能夠透過
          <span>Bootstrap、JQuery</span> 等框架精確完成高度還原設計稿且符合 
          <span>SEO</span> 與 <span>RWD</span> 的網頁，並使用預處理器進行網頁優化。
        </p>
      </div>


      <ul class="ItemSpacing">
      <li class="InfoList">
        <div class="InfoListTitle">
          <p>Operating System</p>
        </div>
        <div class="InfoListIcon">
            <img src="../assets/img/OperatingSystem-1.png" alt="">
            <img src="../assets/img/OperatingSystem-2.png" alt="">
        </div>
      </li>
      <li class="InfoList">
        <div class="InfoListTitle">
          <p>Language</p>
        </div>
        <div class="InfoListIcon">
          <img src="../assets/img/Language-1.png" alt="">
          <img src="../assets/img/Language-2.png" alt="">
          <img src="../assets/img/Language-3.png" alt="">
        </div>
      </li>
      <li class="InfoList">
        <div class="InfoListTitle">
          <p>Contact Me</p>
        </div>
        <div class="InfoListTitle">
            <CopyBtn/>
        </div>
      </li>
      </ul>

      <div class="OutInfoItemBox">

         <InfoItemBox>
           <template v-slot:InfoTitle>
                積極自主學習
           </template>
           <template v-slot:InfoText>
                  積極參與相關活動使人脈及知識活化
                  <br> 增進新知同時了解業界現況
           </template>
         </InfoItemBox>

         <InfoItemBox>
           <template v-slot:InfoTitle>
                設計跨足前端
           </template>
           <template v-slot:InfoText>
                 具 UI / UX 概念及 UI 
                 <br> 設計經驗支援設計師加速專案開發流程
           </template>
         </InfoItemBox>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import InfoItemBox from "@/components/InfoItemBox.vue";
import CopyBtn from "@/components/CopyBtn.vue";

export default {
  name: "Home",
  components: { InfoItemBox , CopyBtn },
};
</script>

<style lang="postcss">
  .myPhoto{
    @apply max-w-full h-full mb-10 mx-auto;
  }

  .home{
    @apply flex flex-wrap 
    sm:flex-nowrap;
  }

 .InfoTitle{
    @apply flex;
  }

  .InfoTitle h1{
      @apply tracking-large;
  }

  .InfoTitle h2{
    @apply text-myBrown;
    }

  .InfoList{
    @apply flex items-center mb-6;
  }

  .InfoListIcon {
    @apply flex items-center ;
  }

  .InfoListIcon img {
    @apply mr-4;
    }

  .InfoListTitle{
    @apply font-bold  w-40;
  }

  .OutInfoItemBox{
    @apply flex flex-wrap justify-center
    sm:justify-between;
  }

</style>