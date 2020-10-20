<template>
    <v-list>
        <v-subheader class="text-subtitle-1">Transactions by date:</v-subheader>
        <v-list-group v-for="report in history" :key="report.date">
            <template v-slot:activator>
                <v-icon class="mr-4" color="primary">mdi-calendar</v-icon>
                <v-list-item-content>
                    <v-list-item-title
                        v-text="formatDate(report.date)"
                    ></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                v-for="transaction in report.transactions"
                :key="transaction.id"
                class="ml-6"
            >
                <v-icon class="mr-4" color="info">mdi-tag</v-icon>
                <Transaction
                    v-bind:transaction="transaction"
                    v-bind:date="report.date"
                />
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<script>
import Transaction from '@/components/Transaction.vue';
import formattersMixin from '@/mixins/formatters';

export default {
    props: ['history'],
    mixins: [formattersMixin],
    components: { Transaction },
    data() {
        return {};
    },
};
</script>
