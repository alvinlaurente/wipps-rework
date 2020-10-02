<script>
/**
 * Dashboard component
 */
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
            ],
        };
    },
    mounted: function () {
    },
  middleware: "authentication",
};
</script>

<template>
    <div>asdsad</div>
</template>