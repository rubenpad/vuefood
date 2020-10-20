<template>
    <v-list flat>
        <v-subheader>Other people also buy:</v-subheader>
        <v-list-item v-for="product in suggestions" :key="product.id">
            <v-list-item-content>
                <v-list-item-title v-text="product.name"></v-list-item-title>
                <v-list-item-subtitle
                    v-text="formatPrice(product.price)"
                ></v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
import formattersMixin from '@/mixins/formatters';

export default {
    mixins: [formattersMixin],
    props: ['suggestions'],
    data() {
        return {};
    },
};
</script>
