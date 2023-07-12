<template>
  <div
    id="root"
    dir="rtl"
    class="absolute flex items-center justify-center w-full h-full p-4 bg-green-500 bg-no-repeat bg-cover bg-random"
  >
    <section
      id="users"
      class="px-8 py-10 m-5 bg-black bg-opacity-30 backdrop-blur-md min-w-[280px] sm:min-w-[600px] md:min-w-[700px] lg:min-w-[1000px] rounded-xl"
    >
      <h2 class="mb-5 text-3xl font-bold text-white">لیست کاربران:</h2>
      <div
        class="overflow-x-auto flex flex-col flex-wrap items-stretch content-start max-h-[300px] p-3 bg-black bg-opacity-20 rounded-lg"
      >
        <UserCard
          v-for="{ id, name, avatar, email } in data.users"
          :key="id"
          :id="id"
          :name="name"
          :avatar="avatar"
          :email="email"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
type User = {
  id: number;
  name: string;
  avatar?: string;
  email: string;
};

type UsersResaults = {
  users: User[];
};

const query = gql`
  query getUsers {
    users {
      id
      name
      avatar
      email
    }
  }
`;
const { data } = await useAsyncQuery<UsersResaults>(query);
</script>
