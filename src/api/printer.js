import Vue from 'vue';

export default {
  getFiles(cb) {
    const files = ['test.file', 'wow.gcode'];
    cb(files);
  },
  getTemps(cb, errcb) {
    Vue.http.get('/inquiry').then((response) => {
      const tempRegexp = /T(\d+).*P(\d+)/;
      const match = tempRegexp.exec(response.body);
      cb({ extruder: match[1], platform: match[2] });
    }, (response) => {
      errcb(response);
    });
  },
};
