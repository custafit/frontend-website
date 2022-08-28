<template>
  <q-page>
    <router-view />
    <div class="p-5">
      <div class="">
        <q-input
          standout="bg-primary text-white "
          v-model="text"
          label="search something"
          :dense="true"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
