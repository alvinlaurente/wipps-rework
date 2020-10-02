<script>
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: "Area",
        };
    },
    data() {
        return {
            title: "Area",
            items: [{
                    text: "Referensi",
                },
                {
                    text: "Area",
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