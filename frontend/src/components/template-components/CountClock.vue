
<template id="countdown-template">
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.data.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
}





</script>


<style>


.countdown {
      display: flex;
    flex-direction: row;
    justify-content: center;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: #1abc9c;
  font-size: 25px;
  font-family: Charmonman,'Roboto Condensed', serif;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
    color: #ecf0f1;
    font-size: 20px;
    font-weight: 100;
    /* font-family: 'Roboto', serif; */
    /* margin: 10px; */
    text-align: center;
}

</style>

