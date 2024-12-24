export type Account = {
    id: string;
    labels: Array<{ text: string }>;
    type: 'LDAP' | 'Локальная';
    login: string;
    password: string | null;
}