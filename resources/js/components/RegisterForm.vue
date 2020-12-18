<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">
        Hello there 👋,
        <span class="font-normal">please fill in your information to continue</span>
      </h1>
      <form class="mt-6">
        <div class="flex justify-between gap-3">
          <span class="w-full">
            <label for="name" class="block text-md font-semibold text-gray-600 uppercase"
              >Fullname</label
            >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John"
              autocomplete="given-name"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
              v-model="form.name"
            />
          </span>
        </div>
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
        <label
          for="password-confirm"
          class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >Confirm password</label
        >
        <input
          id="password-confirm"
          type="password"
          name="password-confirm"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="submit"
          class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
          Sign up
        </button>
        <p
          class="flex justify-between inline-block mt-4 text-md text-gray-500 cursor-pointer hover:text-black"
        >
          Already registered? <a href="/login">LOG IN</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
