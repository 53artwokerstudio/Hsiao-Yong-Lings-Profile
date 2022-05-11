<template>
    <div class="Project ContainerSpacing">
        <TitleBar
        :PageName ="PageName" />
        <ProjectList 
          v-for=" (item,i) in ProjectListItem "
          :key="i"
          :ProjectListTitle ="item.ProjectListTitle"
          :ProjectListImg ="item.ProjectListImg"
          :ProjectListLink ="item.ProjectListLink"
          :ProjectListText ="item.ProjectListText"
          ></ProjectList>
    </div>
</template>

<script>
import  ProjectList from "@/components/ProjectList.vue";
import  TitleBar from "@/components/TitleBar.vue";

export default {
  name: "Project",
  components: { ProjectList , TitleBar },
  data() {
    return {
      PageName: 'Project',
      ProjectListItem:[
        {
          ProjectListTitle:'屏東防災資訊平台',
          ProjectListImg:require('../assets/img/Project-1.png'),
          ProjectListLink:'https://pteoc.pthg.gov.tw/',
          ProjectListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
          },
          {
          ProjectListTitle:'好室旅店。HOUSE HOTEL',
          ProjectListImg:require('../assets/img/Project-2.png'),
          ProjectListLink:'https://53artwokerstudio.github.io/SideProject-HOUSE-HOTEL/',
          ProjectListText:'<p> Vue CLI Side Project，使用 Vue 2 開發，配置環境變數， Vue-Router 設置路由，串接 F2E 2nd API，RWD 響應式網站。</p><br/><p class="pb">Tailwind Css</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">V-Calendar</p><p>引入日曆套件，規劃時間及預約功能</p>',
          }
      ]
    }
  },
};

</script>