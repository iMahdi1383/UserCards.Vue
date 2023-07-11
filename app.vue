<template>
  <p>{{ data }}</p>
</template>

<script lang="ts" setup>
const query = gql`
  query getPosts {
  posts{
    id
		title
    body
  }
  users{
    id
		name
    avatar
    email
  }
}
`
const { data } = await useAsyncQuery(query)
</script>
