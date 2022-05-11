<template>
  <div class="InfoItemBox">
        <p class="TagTitle">
            <slot name="InfoTitle"></slot>
        </p>
        <p class="TagText">
            <slot name="InfoText"></slot>
        </p>
  </div>
</template>

<script>
export default {
  name: "InfoItemBox",
  props: {
    InfoTitle: String,
    InfoText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
  .InfoItemBox{
    @apply flex flex-col items-center mb-5;
  }

  .TagTitle{
    @apply bg-myBrown text-white text-center px-4 py-1 inline z-10 ;
  }

  .TagText{
    @apply  border border-myBrown text-center px-10 pt-9 pb-8 -mt-4;
  }

</style>