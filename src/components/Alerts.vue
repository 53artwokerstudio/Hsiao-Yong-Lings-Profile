<template>
    <div class="Alerts">
        <div class="triangle"></div>
        <div class="AlertsOutline">
            <h5 class="pb">Copied!</h5>
        </div>
    </div>
</template>

<script>
export default {
    name:"Alerts",
}
</script>

<style lang="postcss">
.Alerts{
    @apply flex items-center ml-3 ;
}

.AlertsOutline{
    @apply flex items-center px-3 py-1 -m-1 bg-myBrown-light max-w-md rounded-full shadow-md;
}
.triangle{
width: 0;
height: 0;
border-style: solid;
border-width: 0.5rem 1rem 0.5rem 0;
border-color: transparent #E8E3DD transparent transparent;
}

</style>