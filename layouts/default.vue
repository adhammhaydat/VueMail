<template>
  <div class="container">
    <LeftSidebar />
    <slot />
  </div>
</template>
<style scoped>
.container {
  background: #fff;
  width: 100%;
  display: flex;
}
</style>
