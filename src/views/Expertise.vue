<template>
  <div class="Expertise  ContainerSpacing">
        <TitleBar
        :PageName ="PageName" />

        <div class="position-relative">

        <ul class="OutExpertiseBox">
            <ExpertiseBox
            v-for="(item,i) in  ExpertiseItem"
            :key="i"
            :propsTitle="item.title" 
            :propsText="item.text"
            :class="enterNext"
            >
            </ExpertiseBox>
        </ul>

        <div class="ExpertiseItemBtnBox">
        <p class="ExpertiseItemBtn"  @click="previous"> ＜ </p>
          <div class="moveLine"></div>
        <p class="ExpertiseItemBtn"  @click="next"> ＞ </p>
          </div>

        </div>

  </div>
</template>

<script>
// @ is an alias to /src
import  ExpertiseBox from "@/components/ExpertiseBox.vue";
import  TitleBar from "@/components/TitleBar.vue";

export default {
  name: "Expertise",
  components: {  ExpertiseBox , TitleBar },
  data() {
    return {
      PageName:'Expertise',
      ExpertiseItem: [
        {
          title: "Vue.js",
          text: ['前端框架 Vue.js / Vue CLI  開發',
                'Vue Router 建立路由',
                'components 管理頁面',
                'Vue CLI 管理專案',],
        },
        {
          title: "JavaScript",
          text: ['了解 ES6 標準',
                'AJAX / JSON 串接第三方 API',
                'ESLint 管控程式品質',
                'jQuery 製作互動效果',
                'Gulp 簡化人工步驟'],
        },
        {
          title: "Git",
          text: ['使用 Git 進行版本控管與團隊協作',
                '部屬 GitHub Pages 靜態網頁',],
        },
        {
          title: "Web Layout",
          text: ['熟悉 HTML5、CSS3',
                'RWD 響應式網頁規劃',
                'SCSS 規劃頁面',
                'Bootstrap 5 ',
                ' TailwindCss'],
        },
        {
          title: "UI / UX",
          text: ['具 UI / UX 知識點',
                'Figma / Adobe XD / Sketch / Zeplin 皆可協作',],
        },
      ],
      enterNext:'opacity-100',
    };},
    methods: {
  	next() {
      this.enterNext ='transition-opacity duration-10 opacity-0 ';

      setTimeout(() => {
      const first = this.ExpertiseItem.shift();
      this.ExpertiseItem = this.ExpertiseItem.concat(first);
      this.enterNext ='transition-opacity duration-10 opacity-100 ';
        }, 200);
    },
  	previous() {
      this.enterNext ='transition-opacity duration-10 opacity-0 ';

      setTimeout(() => {       
    	const last = this.ExpertiseItem.pop();
      this.ExpertiseItem = [last].concat(this.ExpertiseItem);
      this.enterNext ='transition-opacity duration-10 opacity-100 ';
       }, 200);
    },
  }
};
</script>

<style lang="postcss">  
  .OutExpertiseBox{
    max-height: 470px;
    @apply flex flex-wrap justify-center overflow-hidden 
    lg:flex-nowrap ;
  }

  .ExpertiseItemBtnBox{
    @apply lg:hidden flex items-center justify-between w-auto;
  }

  .moveLine{
    @apply  w-full border-t border-myBrown-light;
  }

  .ExpertiseItemBtn{
    @apply bg-myBrown text-white  text-center
    rounded-full px-4 py-2 my-auto shadow-md;
  }

</style>
