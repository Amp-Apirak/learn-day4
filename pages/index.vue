<script lang="ts" setup>
// สร้างตัวแปร stats สำหรับเก็บข้อมูลสถิติ พร้อม URL ของภาพ
const stats = [
  { id: 1, name: 'ให้ความสำคัญกับคนในครอบครัว..', value: '44 million', imageUrl: 'https://s3vmwebprd.s3.ap-southeast-1.amazonaws.com/public/services/AWawcQ1w2eGh6ONJftM9wD3FZy23DGJdf9UP8uHY.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, name: 'ใส่ใจดูแล….ผู้สูงอายุ', value: '$119 trillion', imageUrl: 'https://www.synphaet.co.th/wp-content/uploads/2022/04/101560185_xl-scaled.jpg', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 3, name: 'สร้างรอยยิ้มและความสุดใส่..', value: '46,000', imageUrl: 'https://cdn-cms.pgimgs.com/static/2021/01/Change-House-for-Elder.jpg', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

// กำหนด meta tags และ title ของหน้า
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home PointIT, Healthcare Platform",
    },
    {
      name: "keywords",
      content: "Home, PointIT, Healthcare Platform",
    },
  ],
});
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col max-w-md mx-auto">
          <img :src="stat.imageUrl" :alt="stat.name" class="h-64 w-full object-cover"/>
          <div class="p-6">
            <dt class="text-lg font-medium text-gray-900">{{ stat.name }}</dt>
            <dd class="mt-2 text-base text-gray-600 line-clamp-2">{{ stat.description }}</dd>
            <a href="#" class="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-900">
              Read more
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </dl>
    </div>
  </div>

  <!-- Box 1 -->
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
      <figure class="mt-10">
        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-1xl sm:leading-9">
          <p>
            “ผู้สูงอายุหมายถึงผู้ที่มีอายุตั้งแต่ 60 ปีขึ้นไป เป็นวัยนี้จะมีการเปลี่ยนแปลงหลายๆ ด้าน ทั้งทางร่างกาย ทางสมอง ทางอารมณ์และทางสังคม ดังนั้น จึงจำเป็นต้องได้รับการดูแลเอาใจใส่ให้การดูแล และความเข้าใจถึงการเปลี่ยนแปลงต่าง ๆ ดังกล่าวซึ่งจะทำให้ผู้สูงอายุ ได้ปรับตัวได้ดี ลูกหลานหรือผู้ใกล้ชิดจึงมีส่วนสำคัญมากในการช่วยให้ผู้สูงอายุในครอบครัว ใช้ชีวิตได้อย่างมีสุขภาพแข็งแรง และมีความสุขกายสุขใจ.”
          </p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-semibold text-gray-900">Miss. Pattraorn Amornophakun</div>
            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-gray-600">Sale Marketing</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>

  <!-- Box 2 -->
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity.<br />Start using our app today.
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080" />
        </div>
      </div>
    </div>
  </div>

  <!-- Box 3 -->
  <div class="bg-white py-24 sm:py-32 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <img :src="stat.imageUrl" :alt="stat.name" class="mx-auto h-20 w-20" />
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <!-- Box 4  -->
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                Boost your conversion rate
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Michael Foster
                </a>
              </p>
              <p class="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
        </article>
        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                Boost your conversion rate
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Michael Foster
                </a>
              </p>
              <p class="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
        </article>
        <article class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                Boost your conversion rate
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Michael Foster
                </a>
              </p>
              <p class="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* คุณสามารถเพิ่มสไตล์ที่ต้องการเพิ่มเติมในนี้ */
</style>
