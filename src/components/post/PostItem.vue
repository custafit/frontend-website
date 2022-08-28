<template>
  <q-card class="min-w-72 max-w-xl bg-white w-full my-3">
    <div class="flex justify-between p-5">
      <div class="flex gap-2 place-items-center">
        <q-avatar>
          <img :src="seller.image" />
        </q-avatar>
        <div class="font-bold text-md">{{ seller.name }}</div>
      </div>
      <div class="flex gap-2 place-items-center">
        <div v-for="(tag, index) in product.tags" :key="index">
          <div
            v-if="index < 2"
            class="bg-accent inline px-3 py-1 text-white rounded-xl"
          >
            {{ tag }}
          </div>
          <div class="" v-if="index > 2">..</div>
        </div>
      </div>
    </div>
    <div class="max-h-96 overflow-hidden relative">
      <div
        class="p-3 bg-gray-800 bg-opacity-60 absolute bottom-0 w-full h-24 z-10"
      >
        <div class="font-bold text-xl text-white">{{ product.name }}</div>
        <div class="font-bold text-4xl text-accent">$ 53</div>
      </div>
      <q-img src="https://picsum.photos/400/300" class="max-h-96 object-fit" />
    </div>

    <div class="">
      <q-card-actions class="flex justify-between p-5">
        <q-btn
          flat
          round
          color="red"
          :icon="user.liked ? 'favorite' : 'favorite_border'"
        />
        <q-btn flat color="white" icon="add_shopping_cart" class="bg-primary" />
      </q-card-actions>
    </div>
  </q-card>
</template>

<script>
export default {
  props: ["product", "seller", "user"],
  setup() {},
};
</script>

<style></style>
