<script>
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
