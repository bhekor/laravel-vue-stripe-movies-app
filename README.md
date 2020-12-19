# A Movie Application Using Laravel, VueJS and Stripe

> A system where customers can pay to watch videos(movies) based on a daily, monthly, or yearly subscription,

## Features

1. Laravel for Backend
1. VueJS for frontend
1. Laravel Sanctum for API Auth
1. Using the TheMovieDB(TMDB) Movie API
1. Stripe Payment Gateway for the subscription

## To Use This App

**Stripe Payment Gateway:** _https://stripe.com/en-gb-us (MUST BE REGISTERED TO GET YOUR PUBLISH KEY AND SECRET KEY AND TO CREATE SUBSCRIPTION)_

**TMDB API:** _https://www.themoviedb.org/settings/api (MUST BE REGISTERED TO VIEW THIS PAGE TO GET YOUR API KEY AND TOKEN)_

In your **`.env`** file

```php
# Your database details here
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=moviesapp
DB_USERNAME=root
DB_PASSWORD=

# Your API details
TMDB_TOKEN=***__***
TMDB_BEARER=***__***
STRIPE_KEY=pk_test_***__***
STRIPE_SECRET=sk_test_***__***
```

```php
composer update
php artisan migrate
```

```javascript
npm install
```

## Resources Used

**Laravel UI**: Used to setup Vue

> > **Main Docs:** _https://laravel.com/docs/7.x/frontend_

**Laravel Sanctum**: For the authentication

> > **Main Docs:** _https://laravel.com/docs/8.x/sanctum_

**Laravel Cashier**: For the payment/subscription (Easy integration with Stripe)

> > **Main Docs:** _https://laravel.com/docs/8.x/billing_

**Tailwind CSS**: Used for the Frontend UI

> > **Main Docs:** _https://tailwindcss.com/docs/installation_

```javascript
npm install tailwindcss postcss autoprefixer
```

**PostCSS 7 compatibility build**

```c
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

```javascript
npm uninstall tailwindcss postcss autoprefixer

npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

**Alpine.js**: For event handling on the search form (probably not necessary!) - I just like it.

```javascript
<script
    src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
    defer
></script>
```
