<template>
  <div>
    <h1>Welcome Three Dots!</h1>
    <pre>{{ msg }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "App",
  components: {},
  data() {
    return {
      msg: null,
    };
  },
  mounted() {
    axios.get("http://localhost:7000/users").then((res) => {
      this.msg = res.data.msg;
    });

    console.log(process.env.VUE_APP_WS);
    io(process.env.VUE_APP_WS);
  },
};
</script>

<style>
#app {
  margin-top: 4rem;
}
</style>
