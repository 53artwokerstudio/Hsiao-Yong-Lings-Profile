<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">About</router-link> 
      <router-link to="/Experience">Experience</router-link> 
      <router-link to="/Project">Project</router-link>
      <router-link to="/Expertise">Expertise</router-link> 
    </div>

<div class="box">

          <router-view />

</div>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () { 
    return { 
      index:0
       } },
}
</script>

<style lang="postcss">
body{
  @apply bg-myYellow;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {@apply text-center  flex justify-center overflow-hidden h-24 py-2 px-8;}
.nav a{@apply pt-8 pb-36 mr-1 w-32 mt-4 
            text-myBrown font-bold border border-white
            bg-myBrown-light
            rounded-full text-center;}
.nav a:hover{@apply transition ease-in duration-100 text-white bg-myBrown mt-2;}
.nav .router-link-exact-active{@apply  mt-0
text-myBrown-dark  border-myBrown
bg-myBlue pointer-events-none;}


</style>
