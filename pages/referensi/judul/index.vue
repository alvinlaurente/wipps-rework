<script>
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
