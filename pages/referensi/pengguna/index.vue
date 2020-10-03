<script>
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
