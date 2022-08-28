<template>
  <q-page>
    <router-view />
    <div class="p-5">
      <q-list
        padding
        class="rounded-borders text-primary flex md:gap-2 gap-4 flex-wrap"
      >
        <q-item
          clickable
          v-ripple
          class="rounded-lg ring-gray-400 max-w-md w-full"
        >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>Cloths</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          class="rounded-lg ring-gray-400 max-w-md w-full"
        >
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>Art</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          class="rounded-lg ring-gray-400 max-w-md w-full"
        >
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>

          <q-item-section>Craft</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          class="rounded-lg ring-gray-400 max-w-md w-full"
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Others</q-item-section>
        </q-item>
      </q-list>

      <q-card class="my-card my-2">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            Winter Collection
          </div>
        </q-img>
      </q-card>
      <q-card class="my-card my-2">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            Winter Collection
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
