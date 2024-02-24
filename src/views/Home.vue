<template>
<div>
<Header />
<Body />
<Main />
<Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
export default {
    components : {
        Header,
        Body,
        Main,
        Footer
    }
}
</script>

