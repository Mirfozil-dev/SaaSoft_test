<script setup lang="ts">
import AccountsRow from "@/components/AccountsRow.vue";
import { useAccountStore } from '@/stores/accounts.ts';
import type { Account } from "@/types.ts";

const store = useAccountStore();

const handleDeleteAccount = (id: string) => {
  store.deleteAccount(id);
}

const handleChangeAccount = <T extends keyof Account>(id: string, key: T, value: Account[T]) => {
  store.changeAccount(id, key, value);
}

const handleSaveAccount = (account: Account) => {
  store.saveAccount(account);
}

store.loadAccounts()
</script>

<template>
  <div class="overflow-x-scroll overflow-y-hidden py-2">
    <accounts-row
        v-for="(account, index) in store.accounts"
        :key="index"
        class="accounts_row"
        :account="account"
        @delete-account="handleDeleteAccount"
        @change-account="handleChangeAccount"
        @save-account="handleSaveAccount"
    />
  </div>
</template>

<style scoped>
.accounts_row {
  width: 100%;
  min-width: 700px;
}
</style>