<template>
  <div>
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="right-side-modal" :class="{ 'right-side-modal_open': show }">
      <div class="modal-content">
        <div class="modal-header">
          <button @click="closeModal" class="close-button">
            X close (Esc)
          </button>
          <div class="model-actions">
            <ActionButtons
              :archiveSelectedEmails="archiveEmailHandler"
              :markSelectedEmailsAsRead="markEmailAsReadHandler"
            />
          </div>
        </div>
        <div class="email-content">
          <h2>{{ email?.subject }}</h2>
          <span>{{ email?.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    closeModal: Function,
    email: Object,
  },
  setup() {
    const { archiveEmail, markEmailAsRead } = useEmail();
    return { archiveEmail, markEmailAsRead };
  },
  mounted() {
    document.addEventListener("keydown", this.handleGlobalKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleGlobalKeydown);
  },
  methods: {
    closeModal() {
      this.closeModal();
    },
    handleGlobalKeydown(event) {
      if (this.show) {
        switch (event.key) {
          case "r":
            this.markEmailAsReadHandler();
            break;
          case "w":
            this.archiveEmailHandler();
            break;
          case "Escape":
            this.closeModal();
            break;
          default:
            break;
        }
      }
    },
    markEmailAsReadHandler() {
      this.markEmailAsRead(this.email?.id);
    },
    archiveEmailHandler() {
      this.archiveEmail(this.email);
    },
  },
};
</script>

<style scoped>
.right-side-modal {
  position: fixed;
  top: 0;
  right: -58.6%;
  width: 58.6%;
  height: 100%;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
}
.right-side-modal_open {
  right: 0px;
}
.modal-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0px 24px;
}
.close-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #4b5563;
}

.modal-content {
  background-color: white;
  height: 100%;
}
.email-content {
  padding: 0px 24px 0px 24px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
