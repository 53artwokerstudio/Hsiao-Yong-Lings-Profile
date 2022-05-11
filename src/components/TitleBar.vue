<template>
    <div>
        <div class="TitleBarOutside">
      
  <div class="halfO">
      <h1 class="mt-6">{{ PageName }} </h1>
      </div>
</div>
 
 <div class="FakeBottomLine">
      <div class="coverWhiteBox"></div>
   </div>

    </div>
</template>

<script>
export default {
    name:"TitleBar",
    props:{ PageName:String },
}
</script>

<style lang="postcss">
    .TitleBarOutside{
        @apply w-52 h-14 text-center  mx-auto overflow-hidden;
    }
    .halfO{
        @apply border border-myBrown-dark  rounded-full w-52 h-72 text-center px-4 mx-auto;
    }
    .FakeBottomLine{
        @apply w-full  h-10 border-t border-myBrown-dark text-center ;
    }
    .coverWhiteBox{
        margin-top: -1.5px;
        width: 182.5px;       

        @apply h-14 text-center mx-auto bg-white;
    }
</style>