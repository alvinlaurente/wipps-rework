<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Judul",
        };
    },
    data() {
        return {
            title: "Judul",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Judul",
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