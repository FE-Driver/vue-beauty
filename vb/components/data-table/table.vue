<template>

    <thead>

    </thead>

</template>

<script>

    export default {
        name: 'Thead',
        props: {
            size: {
                type: String,
                default: 'middle',
            },
        },
        /*
         我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
         不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
         */
        data() {

        },
        created() {

        },
    };
</script>