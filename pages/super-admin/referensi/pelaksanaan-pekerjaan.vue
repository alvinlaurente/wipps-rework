<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Pelaksanaan Pekerjaan",
        };
    },
    data() {
        return {
            title: "Pelaksanaan Pekerjaan",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Pelaksanaan Pekerjaan",
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