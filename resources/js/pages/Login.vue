<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">
        Hello there 👋,
        <span class="font-normal">Welcome back!</span>
      </h1>
      <form class="mt-6">
        <label
          for="email"
          class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john.doe@company.com"
          autocomplete="email"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
          v-model="form.email"
        />
        <span class="text-red-500" v-if="errors.email">{{ errors.email[0] }}</span>

        <label
          for="password"
          class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >Password</label
        >
        <input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
          v-model="form.password"
        />
        <span class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</span>

        <button
          type="submit"
          class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          @click.prevent="login"
        >
          Log In
        </button>
        <p
          class="flex justify-between inline-block mt-4 text-md text-gray-500 cursor-pointer hover:text-black"
        >
          Don't have an account? <a href="/register">REGISTER NOW</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import User from "../api/User";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
        device_name: "browser",
      },
      errors: [],
    };
  },
  methods: {
    login() {
      User.login(this.form)
        .then((response) => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data);
          this.$router.push({ name: "profile" });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
