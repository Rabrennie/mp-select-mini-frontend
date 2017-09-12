<template>
  <div class="home">
    <h1 v-on:click="getTemps()">{{ msg }}</h1>
    <h1>extruderTemp {{ extruderTemp }}</h1>
    <h1>platformTemp {{ platformTemp }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      extruderTemp: 'extruderTemp',
      platformTemp: 'platformTemp',
    }),
  },
  data() {
    return {
      msg: 'Home',
    };
  },
  methods: {
    ...mapActions([
      'getTemps',
    ]),
  },
  created() {
    window.setInterval(() => {
      this.getTemps();
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
