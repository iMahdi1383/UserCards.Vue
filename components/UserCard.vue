<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row p-2 m-1 bg-black bg-opacity-30 min-w-[220px] rounded-md hover:bg-opacity-60 cursor-pointer transition">
    <NuxtImg
      :src="avatar"
      class="max-w-[50px] p-1 bg-white bg-opacity-10 rounded me-2"
    />
    <div class="flex flex-col justify-center">
      <h3 class="font-bold text-white text-opacity-90">{{ name }}</h3>
      <p class="text-sm text-white text-opacity-40">{{ email }}</p>
    </div>
  </div>
</template>
