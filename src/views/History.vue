<template>
    <div>
        <Spinner v-if="isLoading" />
        <div class="grid-products" v-if="!isLoading">
            <v-card class="grid-up" tile>
                <Buyer v-bind:buyer="buyer[0]" />
            </v-card>

            <v-card class="grid-down d-flex">
                <v-card min-width="50%" flat>
                    <TransactionList v-bind:history="history" />
                </v-card>
                <v-card min-width="50%" flat>
                    <IPList v-bind:iplist="iplist" />
                </v-card>
            </v-card>

            <v-card class="grid-right" tile>
                <Suggestions v-bind:suggestions="suggestions" />
            </v-card>
        </div>
    </div>
</template>

<script>
import Buyer from '@/components/Buyer.vue';
import TransactionList from '@/components/TransactionList.vue';
import IPList from '@/components/IPList.vue';
import Suggestions from '@/components/Suggestions.vue';
import Spinner from '@/components/Spinner.vue';
import api from '@/api';

export default {
    components: { Buyer, TransactionList, IPList, Suggestions, Spinner },
    data() {
        return {
            dialog: false,
            isLoading: false,
            buyer: [],
            history: [],
            suggestions: [],
            iplist: [],
        };
    },
    created() {
        this.getBuyerHistory();
    },
    methods: {
        async getBuyerHistory() {
            this.isLoading = true;
            const buyerId = this.$route.params.buyerId;
            const response = await api.getBuyerHistory(buyerId);
            this.buyer = response.data.buyer;
            this.history = response.data.history;
            this.suggestions = response.data.suggestions;
            this.iplist = response.data.iplist;
            this.isLoading = false;
        },
    },
};
</script>

<style>
.grid-products {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 70% 30%;
    grid-template-rows: 100px auto;
}

.grid-up {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.grid-down {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.grid-right {
    grid-colum: 2 / 3;
    grid-row: 1 / 3;
}
</style>
