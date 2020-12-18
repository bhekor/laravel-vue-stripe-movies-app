<template>
  <div>
    <menu-component />

    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";
export default {
  components: { MenuComponent },
  name: "App",
};
</script>

<style>
body {
  background-color: rgb(233, 233, 233);
}
</style>
