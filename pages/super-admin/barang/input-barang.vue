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
    },
    mounted: function () {
    },
  middleware: "authentication",
};
</script>

<template>
    <div>asdsad</div>
</template>