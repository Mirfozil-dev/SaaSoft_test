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

const handleDeleteAccount = (id: string) => {
  const i = accounts.value.findIndex(item => item.id === id)
  accounts.value.splice(i, 1);
}

const handleChangeAccount = <T extends keyof Account>(id: string, key: T, value: Account[T]) => {
  const i = accounts.value.findIndex(item => item.id === id)
  accounts.value[i][key] = value;
}
</script>

<template>
  <accounts-row
      v-for="(account, index) in accounts"
      :key="index"
      :account="account"
      @delete-account="handleDeleteAccount"
      @change-account="handleChangeAccount"
  />
</template>

<style scoped>

</style>