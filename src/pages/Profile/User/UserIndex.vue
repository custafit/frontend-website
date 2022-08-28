<template>
  <q-page>
    <router-view />
    <div class="p-5">
      <div class="text-xl font-bold my-3">Your Account</div>
      <div class="">
        <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              <!-- <q-badge floating color="teal">new</q-badge> -->
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="font-bold">Anuradha</q-item-label>
            <q-item-label class="text-gray-400">
              click to edit profile</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
      <div class="">
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

            <q-item-section>Orders</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="rounded-lg ring-gray-400 max-w-md w-full"
          >
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>Adress</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="rounded-lg ring-gray-400 max-w-md w-full"
          >
            <q-item-section avatar>
              <q-icon name="delete" />
            </q-item-section>

            <q-item-section>Messages</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="rounded-lg ring-gray-400 max-w-md w-full"
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>Account</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="rounded-lg ring-gray-400 max-w-md w-full"
          >
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>Support</q-item-section>
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
