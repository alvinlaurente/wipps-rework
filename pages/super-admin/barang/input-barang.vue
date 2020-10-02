<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Input Barang",
        };
    },
    data() {
        return {
            title: "Input Barang",
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
        asdasdasd
    </div>
</div>
</template>