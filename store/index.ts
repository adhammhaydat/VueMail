import { defineStore } from 'pinia';

interface Email {
  id: number;
  subject: string;
  read: boolean;
  selected: boolean;
  content: String
}
const emailsArray = [
  {
    id: 1,
    subject: 'Important Meeting',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 2,
    subject: 'New Project Update',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: true,
    selected: false,
  },
  {
    id: 3,
    subject: 'Vacation Plans',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 4,
    subject: 'Product Launch',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: true,
    selected: false,
  },
  {
    id: 5,
    subject: 'Weekly Report',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 6,
    subject: 'Feedback Request',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 7,
    subject: 'Team Lunch',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: true,
    selected: false,
  },
  {
    id: 8,
    subject: 'Training Session',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 9,
    subject: 'Holiday Greetings',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: true,
    selected: false,
  },
  {
    id: 10,
    subject: 'Project Update',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 11,
    subject: 'Product Announcement',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: true,
    selected: false,
  },
  {
    id: 12,
    subject: 'Monthly Report',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 13,
    subject: 'Team Meeting',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 14,
    subject: 'Customer Feedback',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
  {
    id: 15,
    subject: 'Budget Review',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin turpis felis, finibus at nisi nec, convallis finibus purus. Aenean non finibus nibh. Phasellus ac risus vitae felis iaculis faucibus. Curabitur commodo dictum egestas. Sed eget malesuada massa.',
    read: false,
    selected: false,
  },
];


export const useEmailStore = defineStore('email', {
  state: () => ({

    emails: emailsArray as Email[],
    currentEmail: null as Email | null,
    archivedEmails: [] as Email[],
  }),
  actions: {
    setEmails(emails: Email[]) {
      this.emails = emails;
    },
    setCurrentEmail(email: Email | null) {
      this.currentEmail = email;
    },
    archiveEmail(email: Email) {
      this.archivedEmails.push(email);
    },
    markEmailAsRead(emailId: number) {
      const email = this.emails.find((e: Email) => e.id === emailId);
      if (email) {
        email.read = true;
      }
    },
    toggleEmailSelection(emailId: number) {
      const email = this.emails.find((e: Email) => e.id === emailId);
      if (email) {
        email.selected = !email.selected;
      }
    },
    selectAllEmails() {
      this.emails.forEach((email) => {
        email.selected = true;
      });
    },
    unselectAllEmails() {
      this.emails.forEach((email) => {
        email.selected = false;
      });
    },
  },
});