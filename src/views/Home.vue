<template>
    <div>
        <v-card class="mx-auto my-12" max-width="480">
            <v-img
                lazy-src="../assets/goodfood.jpg"
                src="../assets/goodfood.jpg"
                height="250"
            ></v-img>
            <h1 class="text-center mt-4">
                Welcome to
                <span class="font-weight-light text-uppercase">good</span>
                <span class="text-uppercase">food</span>
            </h1>
        </v-card>
        <template>
            <div class="text-center">
                <v-btn color="blue" dark @click="sheet = !sheet">
                    Load Data
                </v-btn>
                <v-bottom-sheet v-model="sheet">
                    <v-sheet class="text-center" height="200px">
                        <v-btn
                            class="mt-6"
                            text
                            color="red"
                            @click="sheet = !sheet"
                        >
                            close
                        </v-btn>
                        <div class="py-3">
                            This is a bottom sheet using the controlled by
                            v-model instead of activator
                        </div>
                    </v-sheet>
                </v-bottom-sheet>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            loader: null,
            loading: false,
            sheet: false,
        };
    },
    watch: {
        loader() {
            const l = this.loader;
            this[l] = !this[l];

            setTimeout(() => (this[l] = false), 3000);

            this.loader = null;
        },
    },
};
</script>
