<script>
/**
* Dashboard component
*/
export default {
head() {
return {
title: "Input Barang",
};
},
data() {
return {
title: "Input Barang",
items: [{
text: "Barang",
},
{
text: "Input Barang",
active: true,
},
],
};
}
};
</script>

<template>
<div>
<PageHeader :title="title" :items="items" />

<input type="email" class="form-control mb-3" placeholder="Search">

<div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-body">
                <h4 class="mb-0">Windshock</h4>
                <p class="text-muted mb-0">2020, 04 Wed 10:25:10</p>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>