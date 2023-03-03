import { create } from 'zustand'

const useStore = create((set) => ({
    currentVideoURL: 'ZJCuWcmFWSk',
    changeVideoURL: (url) => set(() => ({ currentVideoURL: url, autoplay: 1 })),
    autoplay: 0
}))

export default useStore