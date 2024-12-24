<script setup lang="ts">
import {useAccountStore} from "@/stores/accounts.ts";

const { addAccount } = useAccountStore();
</script>

<template>
  <v-card-title>
    Учётные записи
    <v-btn @click="addAccount()" icon class="ml-2" size="small" rounded="lg" color="success">
      <v-icon size="large">mdi-plus</v-icon>
    </v-btn>
  </v-card-title>
</template>

<style scoped>

</style>