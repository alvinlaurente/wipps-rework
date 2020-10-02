<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Pengguna",
        };
    },
    data() {
        return {
            title: "Pengguna",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Pengguna",
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