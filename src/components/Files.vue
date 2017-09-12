<template>
  <div class="files">
    <ul>
      <li v-for="file in files" v-bind:key="file.id">{{ file }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'files',
  computed: mapGetters({
    files: 'allFiles',
  }),
  data() {
    return {
      msg: 'Files:',
    };
  },
  created() {
    this.$store.watch((store) => {
      if (store.socket.isConnected) {
        this.$store.dispatch('getAllFiles');
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
