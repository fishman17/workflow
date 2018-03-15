<template>
  <div>
    <count-down/>
    <count-footer/>
  </div>
</template>
<script>
  import CountDown 
  from './components/CountDown.vue';
  import CountFooter
  from './components/CountFooter.vue';
  
  export default {
    components: {
      "count-down": CountDown,
      "count-footer": CountFooter
    }
  }
</script>
<style>

</style>
