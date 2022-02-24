<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <textarea class="textarea" :value="response"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getConfig } from "@/apis/index";
@Component({
  components: {},
})
export default class Home extends Vue {
  private response = "";
  mounted(): void {
    getConfig().then((res: any) => {
      console.log(
        "🚀 ~ file: Home.vue ~ line 20 ~ Home ~ getConfig ~ res",
        res
      );
      const { data } = res;
      this.response = JSON.stringify(data);
    });
  }
}
</script>
<style lang="scss" scoped>
.textarea {
  display: block;
  width: 100%;
  height: 200px;
  font-size: 26px;
}
</style>
