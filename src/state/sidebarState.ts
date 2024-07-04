// state/useStore.ts
import { create } from "zustand";

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  setResponsiveSidebar: () => void;
}

const useStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => {
      const newState = !state.isSidebarOpen;
      const pageWrapper = document.querySelector(".page-wrapper");
      if (pageWrapper) {
        if (newState) {
          pageWrapper.classList.remove("sidebar-close");
        } else {
          pageWrapper.classList.add("sidebar-close");
        }
      }
      return { isSidebarOpen: newState };
    }),
  closeSidebar: () => {
    const pageWrapper = document.querySelector(".page-wrapper");
    if (pageWrapper) {
      pageWrapper.classList.add("sidebar-close");
    }
    set({ isSidebarOpen: false });
  },
  openSidebar: () => {
    const pageWrapper = document.querySelector(".page-wrapper");
    if (pageWrapper) {
      pageWrapper.classList.remove("sidebar-close");
    }
    set({ isSidebarOpen: true });
  },
  setResponsiveSidebar: () => {
    const pageWrapper = document.querySelector(".page-wrapper");
    if (window.innerWidth <= 1200) {
      if (pageWrapper) {
        pageWrapper.classList.add("sidebar-close");
      }
      set({ isSidebarOpen: false });
    } else {
      if (pageWrapper) {
        pageWrapper.classList.remove("sidebar-close");
      }
      set({ isSidebarOpen: true });
    }
  },
}));

export default useStore;
