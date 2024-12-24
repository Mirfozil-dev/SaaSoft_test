<script setup lang="ts">
import AccountsRow from "@/components/AccountsRow.vue";
import { useAccountStore } from '@/stores/accounts.ts';
import type {Account} from "@/types.ts";

const store = useAccountStore();

const handleDeleteAccount = (id: string) => {
  store.deleteAccount(id);
}

const handleChangeAccount = <T extends keyof Account>(id: string, key: T, value: Account[T]) => {
  store.changeAccount(id, key, value);
}
</script>

<template>
  <accounts-row
      v-for="(account, index) in store.accounts"
      :key="index"
      :account="account"
      @delete-account="handleDeleteAccount"
      @change-account="handleChangeAccount"
  />
</template>