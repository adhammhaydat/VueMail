<template>
  <div class="inbox">
    <div class="header">{{ pageTitle }}</div>
    <div class="inbox-actions">
      <Email
        :email="{ subject: `Email Selected (${selectedEmailCount})` }"
        :clickHandler="() => {}"
        :selectionHandler="() => selectAllEmailsHandler()"
        :withHoverEffect="false"
      />
      <div>
        <ActionButtons
          :archiveSelectedEmails="archiveSelectedEmails"
          :markSelectedEmailsAsRead="markSelectedEmailsAsRead"
        />
      </div>
    </div>
    <div class="emails-wrapper">
      <template v-for="email in emails" :key="email.id">
        <div class="divider"></div>
        <Email
          :email="email"
          :clickHandler="
            () => {
              clickHandler(email);
            }
          "
          :selectionHandler="
            () => {
              selectionHandler(email);
            }
          "
          :withHoverEffect="true"
        />
      </template>
    </div>
  </div>
  <RightSideModal
    v-if="currentEmail.value"
    :show="!!currentEmail?.value"
    :closeModal="closeModal"
    :email="currentEmail?.value"
  />
</template>

<script lang="ts">
import { useEmail } from "~/composables/useEmail";

let allEmailsAreSelected = ref(false);
export default {
  props: {
    pageTitle: String,
  },
  setup() {
    const {
      emails,
      currentEmail,
      archivedEmails,
      setCurrentEmail,
      archiveEmail,
      markEmailAsRead,
      toggleEmailSelection,
      selectAllEmails,
      unselectAllEmails,
    } = useEmail();

    const clickHandler = (email: any) => {
      setCurrentEmail(email);
    };
    const selectionHandler = (email: any) => {
      toggleEmailSelection(email.id);
    };
    const selectAllEmailsHandler = () => {
      if (allEmailsAreSelected.value) {
        unselectAllEmails();
      } else {
        selectAllEmails();
      }
      allEmailsAreSelected.value = !allEmailsAreSelected.value;
    };

    const archiveSelectedEmails = () => {
      const selectedEmails = emails?.filter((email) => email.selected);
      selectedEmails?.forEach((email) => {
        archiveEmail(email);
      });
    };

    const markSelectedEmailsAsRead = () => {
      const selectedEmails = emails.filter((email) => email.selected);
      selectedEmails?.forEach((email) => {
        markEmailAsRead(email?.id);
      });
    };
    const selectedEmailCount = computed(() => {
      const selectedEmails = emails.filter((email) => email.selected);
      return selectedEmails.length;
    });
    const closeModal = () => {
      setCurrentEmail(null);
    };
    return {
      emails: computed(() => emails),
      currentEmail: computed(() => currentEmail),
      archivedEmails,
      selectedEmailCount,
      clickHandler,
      selectionHandler,
      selectAllEmails,
      archiveSelectedEmails,
      markSelectedEmailsAsRead,
      selectAllEmailsHandler,
      closeModal,
    };
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
    handleGlobalKeydown(event: any) {
      switch (event.key) {
        case "r":
          this.markEmailAsReadHandler();
          break;
        case "w":
          this.archiveEmailHandler();
          break;
        default:
          break;
      }
    },
    markEmailAsReadHandler() {
      this.markSelectedEmailsAsRead();
    },
    archiveEmailHandler() {
      this.archiveSelectedEmails();
    },
  },
};
</script>
<style>
.inbox {
  position: relative;
  width: 80%;
  height: 100vh;
  box-sizing: border-box;
  max-height: 100vh;
}
.header {
  position: sticky;
  font-size: 34px;
  font-weight: 600;
  padding: 24px 16px 10px 16px;
}
.inbox-actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.divider {
  width: 100%;
  height: 1px;
  background: #e5e7eb;
}
.emails-wrapper {
  height: 84%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
