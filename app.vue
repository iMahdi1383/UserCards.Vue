<template>
  <h1 class="text-3xl">This is the data : </h1>
  <p class="text-red-600">{{ data }}</p>
</template>

<script lang="ts" setup>
const query = gql`
  query getPosts {
    posts {
      id
      title
      body
    }
    users {
      id
      name
      avatar
      email
    }
  }
`;
const { data } = await useAsyncQuery(query);
</script>
