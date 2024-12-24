import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Account } from "@/types.ts";
import { generateId } from "@/utils.ts";


export const useAccountStore = defineStore('accounts', () => {
    const accounts = ref<Account[]>([]);

    const addAccount = () => {
        accounts.value.push({
            id: generateId(),
            labels: [],
            type: 'Локальная',
            login: '',
            password: ''
        })
    }

    const deleteAccount = (id: string) => {
        const i = accounts.value.findIndex(item => item.id === id)
        accounts.value.splice(i, 1);
    };

    const changeAccount = <T extends keyof Account>(id: string, key: T, value: Account[T]) => {
        const i = accounts.value.findIndex(item => item.id === id)
        accounts.value[i][key] = value;
    }


    return {
        accounts,
        deleteAccount,
        changeAccount,
        addAccount
    };
}, {
    persist: {
        strategies: [
            {
                key: 'accounts-store',
                storage: localStorage,
                paths: ['accounts'],
            },
        ],
    },
})