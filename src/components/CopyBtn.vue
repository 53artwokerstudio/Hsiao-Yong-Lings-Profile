<template>
<div class="flex">
    <button v-clipboard="copyContent"
        v-clipboard:success="clipboardSuccessHandler" 
        v-clipboard:error="clipboardErrorHandler">
        <p class="CopyBtn">iiokyu075@gmail.com</p>  
    </button> 

    <Alerts class="hidden sm:flex" :class="ClassNone"/> 
       
    </div>
</template>

<script>
import Alerts from "@/components/Alerts.vue";

export default {
    name:"CopyBtn",
    components:{ Alerts },
    data() {
      return {
         copyContent:'iiokyu075@gmail.com',
         ClassNone:'opacity-0',
      }
   },
   methods: {
      clipboardSuccessHandler ({ value }){
         console.log('success', value);

         this.ClassNone = 'transition-opacity duration-10 ease-in opacity-100'; 

        setTimeout(() => {
            this.ClassNone ='transition-opacity duration-10 ease-in opacity-0 ';
        }, 1000);
      },
      clipboardErrorHandler ({ value }) {
         console.log('error', value)
      }
    }
}
</script>

<style lang="postcss">
    .CopyBtn{
        @apply   text-myBlue-dark font-bold tracking-wide leading-7
        }
    .CopyBtn:hover{
        @apply  transition text-myBlue
        }
</style>
