<script>
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
