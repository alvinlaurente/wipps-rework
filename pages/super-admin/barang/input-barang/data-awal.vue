<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Data Awal",
        };
    },
    data() {
        return {
            title: "Data Awal",
            items: [{
                    text: "Barang",
                },
                {
                    text: "Input Barang",
                    active: true,
                },
            ],
        };
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        adadas
    </div>
</div>
</template>