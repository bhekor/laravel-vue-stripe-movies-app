<template>
  <div class="lg:mx-20 md:mx-20 text-sm text-gray-900">
    <h1 class="text-3xl pb-5 pt-5 block font-bold">Popular Movies</h1>
    <div class="flex flex-col items-center my-12 justify-end">
      <div class="flex text-gray-700">
        <div
          class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
          <div
            class="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
            v-for="(pagi, index) in paginateNum"
            :key="index"
          >
            <a :href="'?page=' + pagi" class="block">{{ pagi }}</a>
          </div>
        </div>
        <div
          class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="(article, index) in articles"
        class="transition-all duration-150 flex px-4 py-6 w-full md:w-1/4 lg:md:w-1/4"
        :key="index"
      >
        <div
          class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
        >
          <div class="md:flex-shrink-0">
            <router-link :to="{ name: 'single', params: { id: article.id } }">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + article.poster_path"
                alt="Blog Cover"
                class="object-fill rounded-lg rounded-b-none w-full h-auto"
              />
            </router-link>
          </div>
          <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
            <span class="text-xs font-medium text-blue-600 uppercase">
              {{ article.media_type }}
            </span>
            <div class="flex flex-row items-center">
              <div
                class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
              >
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <span>{{ article.popularity }}</span>
              </div>

              <div class="text-xs font-medium text-gray-500 flex flex-row items-center">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
                <span>{{ article.vote_count }}</span>
              </div>
            </div>
          </div>
          <hr class="border-gray-300" />
          <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <router-link
              :to="{ name: 'single', params: { id: article.id } }"
              class="hover:from-green-300"
            >
              <h2
                class="text-2xl font-bold tracking-normal text-gray-800 capitalize"
                v-if="article.name != ''"
              >
                {{ article.name }}
              </h2>
              <h2
                class="text-2xl font-bold tracking-normal text-gray-800 capitalize"
                v-if="article.title != ''"
              >
                {{ article.title }}
              </h2>
            </router-link>
          </div>
          <hr class="border-gray-300" />
          <section class="px-4 py-2 mt-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center flex-1">
                <img
                  class="object-cover h-10 rounded-full"
                  :src="'/images/nseibidapo.jpg'"
                  alt="Avatar"
                />
                <div class="flex flex-col mx-2">
                  <a href="" class="font-semibold text-gray-700 hover:underline">
                    Fajrian Aidil Pratama
                  </a>
                  <span class="mx-1 text-xs text-gray-600">Creator</span>
                </div>
              </div>
              <p class="mt-1 text-xs text-gray-600" v-if="article.release_date != ''">
                {{ article.release_date }}
              </p>
              <p class="mt-1 text-xs text-gray-600" v-if="article.first_air_date != ''">
                {{ article.first_air_date }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieApi from "../api/Movie";

export default {
  name: "Home",
  data() {
    return {
      articles: "",
      paginateNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  created() {
    var self = this;
    let pageNumber = 1;
    let presentUrl = window.location.href;
    let newData = presentUrl.split("=");
    pageNumber = newData[newData.length - 1];

    if (!$.isNumeric(pageNumber)) {
      pageNumber = 1;
    }

    var settings = {
      async: true,
      crossDomain: true,
      url:
        `${movieApi.apiUrl}/trending/all/day?api_key=${movieApi.apiKey}&language=en-US&page=` +
        pageNumber,
      method: "GET",
      headers: {
        "content-type": "application/json;charset=utf-8",
        authorization: `Bearer ${movieApi.bearer}`,
      },
      processData: false,
      data: "{}",
    };
    $.ajax(settings).done(function (response) {
      self.articles = response.results;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
