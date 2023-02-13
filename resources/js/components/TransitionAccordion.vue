<template>
    <Transition
        enter-active-class="overflow-hidden duration-500 linear"
        leave-active-class="overflow-hidden duration-500 linear"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        mode="out-in"
    >
        <slot/>
    </Transition>
</template>

<script setup>
const beforeEnter = el => el.style.height = '0'
const enter = el => el.style.height = el.scrollHeight + 'px'
const afterEnter = el => el.style.height = null
const beforeLeave = el =>  el.style.height = el.scrollHeight + 'px'
const leave = el =>  el.style.height = '0'
const afterLeave = el =>  el.style.height = null
</script>
