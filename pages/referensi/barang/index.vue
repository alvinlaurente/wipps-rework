<script>
export default {
    head() {
        return {
            title: "Barang",
        };
    },
    data() {
        return {
            title: "Barang",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Barang",
                    active: true,
                },
            ]
        };
    }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">

    </div>

</div>
</template>
