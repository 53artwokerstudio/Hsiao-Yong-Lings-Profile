<template>
  <div class="ExpertiseBox">
        <h2 class="ExpertiseBoxTitle">
            {{ propsTitle }}
        </h2>
        
        <p v-for="(item,i) in propsText"
        :key="i"
        class="ExpertiseBoxItem"> 
        {{ item }}
        </p>

  </div>
</template>

<script>
export default {
  name: "ExpertiseBox",
  props: {
    propsTitle: String,
    propsText: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

  .ExpertiseBox{
    @apply  bg-myBrown-lightest border border-myBrown-dark  rounded-full
    w-56 h-80 text-center shadow-md  px-4  mt-20 mr-6 ml-6 sm:ml-0;
  }
  .ExpertiseBox:hover{
    @apply  sm:mt-10 transition duration-150  ;
  }

    .ExpertiseBox:last-child{
    @apply  mr-0;
  }

    .ExpertiseBoxTitle{
      @apply mt-8;
    }

</style>
