<template>
<div class="InfoText ContainerSpacing">
        <TitleBar
        :PageName ="PageName" />

    <ul>
        <li class="ItemSpacing">
            <h1>個人接案 網頁前端設計師</h1>
            <p>2018/8 ⸺ 至今</p>
            <p>網站設計及前端語言撰寫，依據客戶需求提供 UI / UX 設計建議，與合作後端協作專案。</p>
            <p class="ExperienceTag">
                <span>前端框架 Vue.js / Vue CLI 開發</span>
                <span>AAA 無障礙政府網站 製作經驗</span>
                <span>介接 Google Service API 經驗</span>
            </p>
        </li>

        <li class="ItemSpacing">
            <h1>光全貿易有限公司 APP / 品牌視覺設計</h1>
            <p>2017/7 ⸺ 2018/8</p>
            <p>美商品牌代理企業，與 TOMS / SANUK / STANCE ... 等品牌代理合作開發品牌網站及其電商平台，參與中文版 Guide-line 及主要規劃團隊，電商平台亦曾與 91App 共同開發。</p>
            <p class="ExperienceTag">
                <span>品牌官方網站規劃</span>
                <span>App 廣告行銷方案/品牌設計規劃</span>
                <span>UI/UX 設計經驗</span>
            </p>
        </li>

        <li class="ItemSpacing">
            <h1>個人接案 網頁前端設計師</h1>
            <p>2014/6</p>
        </li>
    </ul>

</div>
</template>

<script>
import  TitleBar from "@/components/TitleBar.vue";

export default {
    name: "Experience",
    components: { TitleBar },
    data() {
        return {
            PageName:'Experience',
        }
    },
}
</script>

<style lang="postcss">
    .ExperienceTag span{
        @apply mr-4;
    }
</style>