<template>
  <div class="overflow-hidden" v-if="user">
    <div class="w-screen h-screen flex justify-center items-center">
      <div
        class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white"
      >
        <div
          class="relative z-10"
          style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))"
        >
          <img class="w-full" :src="'/images/vdrbanner.jpg'" alt="Profile image" />
          <div class="text-center absolute w-full" style="bottom: 4rem">
            <p class="text-white tracking-wide uppercase text-lg font-bold">
              {{ user.name }}
            </p>
            <p class="text-gray-400 text-sm">{{ user.email }}</p>
          </div>
        </div>
        <div class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
          <p class="flex items-center text-gray-400">
            <span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span
            >online
          </p>
          <button
            class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
          >
            <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                  C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
        <div class="pt-6 pb-8 text-gray-600 text-center">
          <p class="font-bold uppercase">Current Plan</p>
          <p class="text-md">
            You are on a <span class="text-green-600 font-bold">DAILY</span> plan
          </p>
        </div>

        <div class="pb-10 uppercase text-center tracking-wide flex justify-around">
          <p class="text-lg font-semibold text-red-400">
            Use the button above to make payment!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../api/User";
export default {
  name: "Test",
  created() {},
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    User.auth().then((response) => {
      this.user = response.data;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
