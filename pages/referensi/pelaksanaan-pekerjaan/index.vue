<script>
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
