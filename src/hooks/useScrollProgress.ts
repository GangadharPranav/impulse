"use client";

import { create } from "zustand";

interface ScrollState {
  progress: number; // 0 to 1
  scrollY: number;
  setProgress: (progress: number, scrollY: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  scrollY: 0,
  setProgress: (progress, scrollY) => set({ progress, scrollY }),
}));
