<script lang="ts" setup></script>

<template>
  <!-- เริ่มต้นส่วนของ Footer -->
  <footer class="
      bg-gradient-to-r from-blue-500 via-green-500 to-purple-500
      text-white
      py-4
      border-t-4 border-white">
    <!-- คอนเทนเนอร์สำหรับจัดวางเนื้อหาใน Footer -->
    <div
      class="container mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center px-4 sm:px-0"
    >
      <!-- ลิงก์ชื่อ Nuxt Tailwind -->
      <a href="#" class="font-semibold text-lg text-white">Nuxt Tailwind</a>
      <!-- ข้อความลิขสิทธิ์และลิงก์ IT Genius -->
      <div class="text-sm">
        Nuxt Tailwind by
        <a
          href="#"
          class="font-semibold text-white"
        >
          IT Genius
        </a>
        . All rights reserved
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
