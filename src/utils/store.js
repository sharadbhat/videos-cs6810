import { create } from 'zustand'

const useStore = create((set) => ({
    currentVideoURL: 'https://www.youtube.com/embed/ZJCuWcmFWSk',
    changeVideoURL: (url) => set(() => ({ currentVideoURL: url }))
}))

export default useStore