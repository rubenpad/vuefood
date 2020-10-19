<template>
    <div class="grid-products">
        <div class="grid-up">
            <Buyer v-bind:buyer="buyer" :key="buyer.id" />
        </div>

        <v-card class="grid-down" tile>
            <v-list>
                <v-subheader class="text-subtitle-1">Transactions by date:</v-subheader>
                <v-list-group
                    v-for="report in history"
                    :key="report.date"
                    :prepend-icon="'mdi-tag'"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="report.date"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="transaction in report.transactions"
                        :key="transaction.id"
                        class="ml-6"
                    >
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="transaction.id"
                            ></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-card>

        <v-card class="grid-right" tile>
            <v-list flat>
                <v-subheader>Other people also buy:</v-subheader>
                <v-list-item v-for="product in suggestions" :key="product.id">
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="product.name"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                            v-text="product.price"
                        ></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
import Buyer from '@/components/Buyer.vue';
import jsondata from '../../data.json';

export default {
    components: { Buyer },
    data() {
        return {
            buyer: jsondata.data.buyer,
            history: jsondata.data.history,
            suggestions: jsondata.data.suggestions,
        };
    },
};
</script>

<style>
.grid-products {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 70% 30%;
    grid-template-rows: 5% 95%;
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
