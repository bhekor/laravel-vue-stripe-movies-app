export default {
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: `{{ config('services.tmdb.token') }}`,
    bearer: `{{ config('services.tmdb.bearer') }}`,
}