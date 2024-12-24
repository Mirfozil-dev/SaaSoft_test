<script setup lang="ts">
import { ref } from "vue";
import type { Account } from "@/types.ts";
import AccountsRow from "@/components/AccountsRow.vue";

const accounts = ref<Account[]>([
  { id: '1', labels: [{ text: 'XXX' }, { text: 'XXX' }], type: 'Локальная', login: 'Значение', password: 'password' },
  { id: '2', labels: [{ text: 'XXX' }, { text: 'XXX' }], type: 'Локальная', login: 'Значение', password: 'password' },
  { id: '3', labels: [{ text: 'XXX' }, { text: 'XXX' }], type: 'Локальная', login: 'Значение', password: 'password' },
  { id: '4', labels: [{ text: 'XXX' }, { text: 'XXX' }], type: 'LDAP', login: 'Значение', password: 'password' },
  { id: '5', labels: [{ text: 'XXX' }, { text: 'XXX' }], type: 'LDAP', login: 'Значение', password: 'password' },
]);
</script>

<template>
  <accounts-row
      v-for="(account, index) in accounts"
      :key="index"
      :account="account"
  />
</template>

<style scoped>

</style>