<template>
  <q-page>
    <router-view />
    <div class="p-5">
      <div class="text-xl font-bold my-3">Your Account</div>
      <div class="">
        <q-list
          padding
          class="rounded-borders text-primary flex gap-2 flex-wrap max-w-md"
        >
          <q-item clickable v-ripple class="ring-2 rounded-lg ring-gray-400">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>Inbox</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>Outbox</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>

            <q-item-section>Trash</q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>Settings</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>Help</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  setup() {},
};
</script>
