<template>
  <div>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            :alt="article.title"
            class="lg:w-1/3 w-40 object-center rounded border border-gray-200"
            :src="'https://image.tmdb.org/t/p/w500/' + article.poster_path"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">
              {{ article.tagline }}
            </h2>
            <h1
              class="text-gray-900 text-3xl title-font font-medium mb-1"
              v-if="article.title != ''"
            >
              {{ article.title }}
            </h1>
            <h1
              class="text-gray-900 text-3xl title-font font-medium mb-1"
              v-if="article.name != ''"
            >
              {{ article.name }}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
                <span class="text-gray-600 ml-3">{{ article.popularity }} Reviews</span>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
            <p class="leading-relaxed">
              {{ article.overview }}
            </p>
            <div class="flex flex-row gap-4">
              <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase mt-3">
                <span class="font-bold">Runtime:</span>
                {{ article.runtime }}mins
              </h2>
              <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase mt-3">
                <span class="font-bold">Language:</span>
                {{ article.original_language }}
              </h2>
              <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase mt-3">
                <span class="font-bold">Budget:</span>
                {{ article.budget }}
              </h2>
            </div>
            <div class="flex pt-5 pb-10">
              <button
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                <a :href="'https://www.youtube.com/watch?v=' + videos[0].key"
                  >Watch Trailer</a
                >
              </button>
            </div>

            <hr class="border-gray-300" />
            <div class="pt-5">
              <h4 class="title-font font-medium text-2xl text-gray-900">
                Featured Casts
              </h4>
              <div class="flex flex-row pt-5">
                <div class="mr-5">
                  <img
                    class="rounded-full w-20 h-20 border-2 border-transparent hover:border-indigo-400"
                    src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                    alt="Andy Leverenz"
                  />
                  <h5>James Ban</h5>
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    Designer
                  </h2>
                </div>
                <div class="mr-2">
                  <img
                    class="rounded-full w-20 h-20 border-2 border-transparent hover:border-indigo-400"
                    src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                    alt="Andy Leverenz"
                  />
                  <h5>James Ban</h5>
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    Designer
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import movieApi from "../api/Movie";

export default {
  name: "Single",
  data() {
    return {
      article: [],
      videos: [],
    };
  },
  created() {
    var self = this;
    let presentUrl = window.location.href;
    let newData = presentUrl.split("/");
    let movie_id = newData[newData.length - 1];

    var settings = {
      async: true,
      crossDomain: true,
      url: `${movieApi.apiUrl}/movie/` + movie_id + `?api_key=${movieApi.apiKey}`,
      method: "GET",
      headers: {
        "content-type": "application/json;charset=utf-8",
        authorization: `Bearer ${movieApi.bearer}`,
      },
      processData: false,
      data: "{}",
    };
    $.ajax(settings).done(function (response) {
      self.article = response;
      console.log(self.article);
    });

    setTimeout(() => {
      var vidSettings = {
        async: true,
        crossDomain: true,
        url:
          `${movieApi.apiUrl}/movie/` + movie_id + `/videos?api_key=${movieApi.apiKey}`,
        method: "GET",
        headers: {
          "content-type": "application/json;charset=utf-8",
          authorization: `Bearer ${movieApi.bearer}`,
        },
        processData: false,
        data: "{}",
      };
      $.ajax(vidSettings).done(function (response) {
        self.videos = response.results;
        console.log(self.videos);
      });
    }, 2000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
