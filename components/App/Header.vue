<script lang="ts" setup>
  // กำหนดตัวแปร isOpen เป็น reactive reference เพื่อควบคุมการเปิด/ปิดเมนู
  const isOpen = ref(false)
</script>

<template>
  <!-- เริ่มต้นแถบนำทาง (navbar) -->
  <header class="
      navbar-default
      bg-gradient-to-r from-blue-500 via-green-500 to-purple-500
      text-skin-base
      py-3
      border-b-4 border-white
      sticky
      top-0">
    <!-- คอนเทนเนอร์สำหรับจัดวางเนื้อหาในแถบนำทาง -->
    <div class="
      container
      mx-auto
      pl-4
      pr-2
      sm:px-0
      flex flex-row
      items-center
      gap-4
      justify-between">
      <!-- ส่วนโลโก้และลิงก์ Health Point -->
      <div class="flex items-center gap-2">
        <img src="/assets/images/7.png" alt="" style="width: 120px; height: 105px;">
        <NuxtLink to="/" class="font-bold text-lg text-white">Health Point</NuxtLink>
      </div>
      <!-- ปุ่มเมนูสำหรับมือถือ -->
      <button 
        class="appearance-none px-2 py-2 rounded sm:hidden"
        type="button"
        aria-label="menu"
        @click="isOpen = !isOpen"
      >
        <Icon name="ri:menu-line" class="w-6 h-6" />
      </button>

      <!-- เมนู -->
      <div :class="isOpen ? 'fixed sm:relative top-16 shadow sm:shadow-none left-4 right-4 rounded-lg overflow-hidden bg-white sm:bg-transparent py-2':'hidden sm:flex sm:w-6/12'">
        <!-- นำทางลิงก์เมนู -->
        <nav class="
          flex flex-col
          sm:relative
          w-full
          items-start
          sm:flex-row
          sm:justify-end
          sm:gap-1
          sm:items-center
        ">
          <!-- ลิงก์หน้า Home -->
          <NuxtLink to="/" class="
            px-4
            py-2
            rounded-full
            w-full
            sm:w-auto
            text-white
            hover:text-gray-200
            hover:bg-skin-fill-hover
            transition
            duration-200
            font-medium"
            exact-active-class="bg-skin-fill-active text-skin-active"
            >Home</NuxtLink>
          <!-- ลิงก์หน้า Store -->
          <NuxtLink to="/categories" class="
            px-4
            py-2
            rounded-full
            w-full
            sm:w-auto
            text-white
            hover:text-gray-200
            hover:bg-skin-fill-hover
            transition
            duration-200
            font-medium"
            exact-active-class="bg-skin-fill-active text-skin-active"
            >Categories</NuxtLink>
          <!-- ลิงก์หน้า Blog -->
          <NuxtLink to="/blog" class="
            px-4
            py-2
            rounded-full
            w-full
            sm:w-auto
            text-white
            hover:text-gray-200
            hover:bg-skin-fill-hover
            transition
            duration-200
            font-medium"
            exact-active-class="bg-skin-fill-active text-skin-active"
            >Blog</NuxtLink>
          <!-- ลิงก์หน้า Contact -->
          <NuxtLink to="/contact" class="
            px-4
            py-2
            rounded-full
            w-full
            sm:w-auto
            text-white
            hover:text-gray-200
            hover:bg-skin-fill-hover
            transition
            duration-200
            font-medium"
            exact-active-class="bg-skin-fill-active text-skin-active"
            >Contact</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
  /* กำหนดตัวแปรสีพื้นฐานสำหรับแถบนำทาง */
  .navbar-default {
    --color-text-base: #ffffff;
    --color-text-active: #ffffff;
    --color-text-hover: #ffffff;
    --color-text-muted: #1d4ed8;
    --color-fill-hover: #1d4ed8;
    --color-fill-active: #1d4ed8;
  }

  /* กำหนดสีพื้นหลังสำหรับคลาส bg-primary */
  .bg-primary {
    background-color: var(--bg-primary);
  }
</style>
