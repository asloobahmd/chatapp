import { create } from "zustand";

export const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  sidebarVisible: false,
  setSidebarVisible: (val) => set({ sidebarVisible: val }), // used sidebar related details here instead of creating another store for sidebartoggle
  // messages: [],
  // setMessages: (messages) => set({ messages: messages }),  i didnt used this because im using reqct query and it has cashing so i dont need it i can update message state
}));
