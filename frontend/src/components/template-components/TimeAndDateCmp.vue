<template>
  <section class="time-date-container">
    <hour-cmp></hour-cmp>
    <day-cmp></day-cmp>
  </section>
</template>

<script>
import hourCmp from "@/components/template-components/HourCmp.vue";
import dayCmp from "@/components/template-components/DayCmp.vue";

export default {
  props: {
    props: {
      data: Object
    },
    components: {
      hourCmp,
      dayCmp
    }
  }
};

</script>

<style>
</style>
