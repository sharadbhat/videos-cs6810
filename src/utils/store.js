import { create } from 'zustand'

const useStore = create((set) => ({
  currentVideoURL: '',
  changeVideo: (url) => set(() => ({ currentVideoURL: url }))
}))