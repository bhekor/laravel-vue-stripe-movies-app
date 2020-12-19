<template>
  <div id="">
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-between items-center">
        <a href="#">
          <svg
            width="32"
            height="36"
            viewBox="0 0 32 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"
            ></path>
          </svg>
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block"
        ><svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
      ></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul
            class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
          >
            <li>
              <router-link
                :to="{ name: 'subscriptions' }"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >Subscriptions</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'home' }"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >Documentation</router-link
              >
            </li>
            <li v-if="!isLoggedIn">
              <router-link
                :to="{ name: 'login' }"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >Login</router-link
              >
            </li>
            <li v-if="!isLoggedIn">
              <router-link
                :to="{ name: 'register' }"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >Register</router-link
              >
            </li>

            <li v-if="isLoggedIn">
              <a
                @click.prevent="logout"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                >Logout</a
              >
            </li>
          </ul>
        </nav>
        <a
          href="#"
          class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
        >
          <img
            class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
            src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
            alt="Andy Leverenz"
          />
        </a>
      </div>
    </header>

    <div class="container mt-5 px-40">
      <div
        class="relative text-gray-600 justify-self-center"
        x-data="{ isOpen: true}"
        x-on:click.away="isOpen=false"
      >
        <input
          type="search"
          name="serch"
          placeholder="Search"
          class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
          v-model="searchTerm"
          x-on:focus="isOpen=true"
          x-on:keydown.escape.window="isOpen=false"
          x-on:keydown.shift.tab="isOpen=false"
          x-on:keydown="isOpen=true"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg
            class="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
        <div
          class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50 w-full overflow-y-scroll h-auto max-h-96"
          v-if="searchResults != ''"
          x-show.transition.opacity="isOpen"
        >
          <ul>
            <li
              v-for="(searchResult, index) in searchResults"
              :key="index"
              class="border-b border-gray-400"
            >
              <router-link
                :to="{ name: 'single', params: { id: searchResult.id } }"
                class="block hover:bg-gray-700 hover:text-white px-3 py-3 text-decoration-none flex flex-row items-center"
              >
                <img
                  v-if="searchResult.poster_path"
                  :src="'https://image.tmdb.org/t/p/w500/' + searchResult.poster_path"
                  :alt="'{searchResult.title}'"
                  class="w-10 lg:w-20"
                />
                <img
                  v-else
                  src="https://via.placeholder.com/150"
                  class="w-10 lg:w-20"
                  alt=""
                  srcset=""
                />
                <span class="ml-4" v-if="searchResult.title">{{
                  searchResult.title
                }}</span>
                <span class="ml-4" v-if="searchResult.name">{{
                  searchResult.title
                }}</span>
              </router-link>
            </li>
            <li v-if="searchResults == ''" class="flex justify-center py-10">
              No result found for you search '<strong>{{ searchTerm }}</strong
              >'!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../api/User";
import movieApi from "../api/Movie";

export default {
  data() {
    return {
      isLoggedIn: false,
      searchTerm: "",
      searchResults: [],
    };
  },
  mounted() {
    this.$root.$on("login", () => {
      this.isLoggedIn = true;
    });
    this.isLoggedIn = !!localStorage.getItem("token");
  },
  watch: {
    searchTerm: function (query) {
      var self = this;
      if (query.length >= 3) {
        var settings = {
          async: true,
          crossDomain: true,
          url: `${movieApi.apiUrl}/search/movie?query=` + query,
          method: "GET",
          headers: {
            "content-type": "application/json;charset=utf-8",
            authorization: `Bearer ${movieApi.bearer}`,
          },
          processData: false,
          data: "{}",
        };
        $.ajax(settings).done(function (response) {
          self.searchResults = response.results;
        });
      }
    },
  },
  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
