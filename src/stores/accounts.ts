import { defineStore } from 'pinia';
import { ref } from "vue";
import type { Account } from "@/types.ts";
import { generateId } from "@/utils.ts";


export const useAccountStore = defineStore('accountsStore', () => {
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
        accounts.value = accounts.value.filter(item => item.id !== id)
        changeSyncState(data => {
            return data.filter((item: Account) => item.id !== id)
        })
    };

    const changeAccount = <T extends keyof Account>(id: string, key: T, value: Account[T]) => {
        const i = accounts.value.findIndex(item => item.id === id)
        accounts.value[i][key] = value;
    }

    const loadAccounts = () => {
        accounts.value = JSON.parse(localStorage.getItem("accounts") || '[]')
    }

    const saveAccount = (account: Account) => {
        changeSyncState(data => {
            const i = data.findIndex((item: Account) => item.id === account.id)

            if (i >= 0) {
                data[i] = account
            } else {
                data.push(account)
            }
            return data
        })
    }

    const changeSyncState = (callback: (data: Account[]) => Account[]) => {
        const data = JSON.parse(localStorage.getItem("accounts") || '[]')
        const newData = callback(data)
        localStorage.setItem("accounts", JSON.stringify(newData))
    }


    return {
        accounts,
        deleteAccount,
        changeAccount,
        addAccount,
        loadAccounts,
        saveAccount
    };
})