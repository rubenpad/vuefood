<template>
    <v-list>
        <v-subheader class="text-subtitle-1"
            >People using the same IP:</v-subheader
        >
        <v-list-group v-for="group in iplist" :key="group.uid">
            <template v-slot:activator>
                <v-icon class="mr-4" color="primary">mdi-map-marker</v-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="group.ip"></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                v-for="item in group.buyers"
                :key="item.buyer.id"
                class="ml-6"
            >
                <v-icon class="mr-4">mdi-account</v-icon>
                <router-link
                    :to="{
                        name: 'History',
                        params: { buyerId: item.buyer.id },
                    }"
                >
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="item.buyer.name"
                        ></v-list-item-title>
                    </v-list-item-content>
                </router-link>
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
    props: ['iplist'],
    data() {
        return {};
    },
};
</script>
