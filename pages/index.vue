<script lang="ts" setup>
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
  <div>
    <section
      class="bg-skin-fill sm:h-screen grid place-items-center -mt-1 sm:mt-0 hero-default"
    >
      <div
        class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20"
      >
        <div class="w-full sm:w-6/12">
          <h1
            class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base"
          >
            AI Tracker
          </h1>
          <p class="text-xl mt-4 mb-14 text-skin-muted">
            อุปกรณ์สื่อสาร ติดตามตัว ดูแลห่วงใยคนใกล้ตัว ด้วย AI Tracker
          </p>
          <div class="space-x-4">
            <button class="btn btn-primary btn-xl">Get Started</button>
          </div>
        </div>
        <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
          <!-- ปรับขนาดรูปภาพให้รองรับการทำงานแบบ Responsive -->
          <img
            loading="lazy"
            src="~/assets/images/8.png"
            alt=""
            class="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>

    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                A better workflow
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
                <Icon name="fluent-emoji:a-button-blood-type"></Icon>
              </p>
              <dl
                class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
              >
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="relative pl-9"
                >
                  <dt class="inline font-semibold text-gray-900">
                    <component
                      :is="feature.icon"
                      class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {{ feature.name }}
                  </dt>
                  {{ " " }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- ปรับขนาดรูปภาพให้รองรับการทำงานแบบ Responsive -->
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            class="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>

    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* คุณสามารถเพิ่มสไตล์ที่ต้องการเพิ่มเติมในนี้ */
</style>
