<template>
  <div
    class="email-container"
    :class="{ 'email-read': email?.read, 'email-hover': withHoverEffect }"
    @click="handleItemClick"
  >
    <input
      type="checkbox"
      class="checkbox"
      :checked="email?.selected"
      @change="handleToggleSelectionClick"
    />
    <span class="text">{{ email?.subject || "" }}</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    email: Object,
    clickHandler: Function,
    selectionHandler: Function,
    withHoverEffect: Boolean,
  },
  setup(props: any) {
    const handleItemClick = () => {
      props.clickHandler();
    };

    const handleToggleSelectionClick = () => {
      props.selectionHandler();
    };

    return {
      handleItemClick,
      handleToggleSelectionClick,
    };
  },
};
</script>

<style scoped>
.email-container {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0px 24px;
  gap: 12px;
  color: #000000;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}
.email-hover:hover {
  background-color: #cad6e4;
}
.email-read {
  opacity: 0.5;
}
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
}
.text {
  font-size: 16px;
  font-weight: 600;
  color: #121829;
}
</style>
