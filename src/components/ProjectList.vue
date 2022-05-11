<template>
    <div class="ProjectList ItemSpacing">
        <div class="ProjectItemImg">
            <a :href="ProjectListLink" Target="_blank">
            <img :src="ProjectListImg"
                 alt="開新視窗" srcset="">
            </a>
        </div>

        <div class="ProjectItemText">
            <div class="ItemSpacing">
                <a :href="href" Target="_blank">
                    <h2> {{ ProjectListTitle }} </h2>
                </a>
                <div v-html="ProjectListText"></div>
            </div>

            <a  :href="ProjectListLink"
                Target="_blank"
                class="ViewBTN"> VIEW </a>
        </div>
        
   </div>
</template>

<script>
export default {
  name: "ProjectList",
  props:{ 
    ProjectListTitle : String,
    ProjectListImg : String,
    ProjectListLink : String,
    ProjectListText : String,
   },
};
</script>

<style lang="postcss">
    .ProjectList{
        @apply flex flex-wrap justify-center items-center border-b border-myBrown-light pb-10
        sm:flex-nowrap;
    }

    .ProjectItemImg{
        @apply border border-myBrown rounded-3xl shadow-md mx-auto mb-5 overflow-hidden
        sm:mr-20 ;
    }
    .ProjectItemImg:hover{
        @apply transition duration-300 shadow-lg;
    }

    .ProjectItemText{
        @apply flex flex-col items-center sm:items-start w-2/3;
    }

    .ViewBTN{
        @apply bg-myBrown-light border border-myBrown shadow-md py-2 px-16 rounded-full;
    }
    .ViewBTN:hover{
        @apply text-myBrown-light bg-myBrown border border-myBrown-light transition ;
    }
</style>