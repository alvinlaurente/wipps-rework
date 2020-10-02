<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Daftar Barang",
        };
    },
    data() {
        return {
            title: "Daftar Barang",
            items: [{
                    text: "Barang",
                },
                {
                    text: "Daftar Barang",
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