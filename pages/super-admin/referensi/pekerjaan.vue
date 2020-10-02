<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Pekerjaan",
        };
    },
    data() {
        return {
            title: "Pekerjaan",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Pekerjaan",
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