import { useEmailStore } from '@/store';
interface Email {
  id: number;
  subject: string;
  read: boolean;
  selected: boolean;
  content: String
}
export function useEmail() {
  const store = useEmailStore();
  const currentEmail: Ref<Email | null> = ref(null);

  const setCurrentEmail = (email: Email | null) => {
    currentEmail.value = email;
  };
  const archiveEmail = (email: Email) => {
    store.archiveEmail(email);
  };

  const markEmailAsRead = (emailId: number) => {
    store.markEmailAsRead(emailId);
  };

  const toggleEmailSelection = (emailId: number) => {
    store.toggleEmailSelection(emailId);
  };
  const selectAllEmails = () => {
    store.selectAllEmails()
  }
  const unselectAllEmails = () => {
    store.unselectAllEmails()
  }

  return {
    emails: store.emails,
    currentEmail,
    archivedEmails: store.archivedEmails,
    setCurrentEmail,
    archiveEmail,
    markEmailAsRead,
    toggleEmailSelection,
    selectAllEmails,
    unselectAllEmails
  };
}