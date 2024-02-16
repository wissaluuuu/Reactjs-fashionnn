
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel': "url('/src/assets/img/master-slide-01.jpg')",
        'carousel1': "url('/src/assets/img/master-slide-02.jpg')",
        'carousel2': "url('/src/assets/img/master-slide-03.jpg')",
        'carousel3': "url('/src/assets/img/master-slide-04.jpg')",
        'carousel4': "url('/src/assets/img/master-slide-05.jpg')",
        'item1': "url('/src/assets/img/item-01.jpg')",
        'item2': "url('/src/assets/img/item-02.jpg')",
        'item3': "url('/src/assets/img/item-03.jpg')",
        'item4': "url('/src/assets/img/item-04.jpg')",
        'item5': "url('/src/assets/img/item-05.jpg')",
        'item6': "url('/src/assets/img/item-06.jpg')",
        'about': "url('/src/assets/img/heading-pages-06.jpg')",
        'about1': "url('/src/assets/img/item-cart-01.jpg')",
        'glasses.girl': "url('/src/assets/img/banner-08.jpg')",
        'glasses': "url('/src/assets/img/shop-item-09.jpg')",
        'blog1': "url('/src/assets/img/blog-01.jpg')",
        'blog2': "url('/src/assets/img/blog-02.jpg')",
        'blog3': "url('/src/assets/img/blog-03.jpg')",
        'shop': "url('/src/assets/img/heading-pages-02.jpg')",
        'tabs1': "url('/src/assets/img/thumb-item-01.jpg')",
        'tabs2': "url('/src/assets/img/item-13.jpg')",
        'tabs3': "url('/src/assets/img/item-12.jpg')",
        'tabs4': "url('/src/assets/img/item-11.jpg')",


        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
