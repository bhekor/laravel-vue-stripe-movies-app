<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">
        Hello there 👋,
        <span class="font-normal">Welcome back!</span>
      </h1>
      <form class="mt-6">
        <label for="name" class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >Cardholder Name</label
        >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Done"
          autocomplete="name"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <label
          for="cardnumber"
          class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >Subscription Plan</label
        >
        <select
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        >
          <option>- Select Plan -</option>
        </select>
        <label
          for="cardnumber"
          class="block mt-2 text-md font-semibold text-gray-600 uppercase"
          >Card Number</label
        >
        <input
          id="cardnumber"
          type="text"
          name="password"
          placeholder="*************"
          autocomplete="cardnumber"
          class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          required
        />
        <button
          type="submit"
          class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        >
          Pay Now
        </button>
        <p
          class="flex justify-between inline-block mt-4 text-md text-gray-500 cursor-pointer hover:text-black"
        >
          Make sure to verify your details!
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
