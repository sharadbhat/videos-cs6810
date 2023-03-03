import { create } from 'zustand'

const useStore = create((set) => ({
    autoplay: 0,
    currentVideoURL: 'ZJCuWcmFWSk',
    changeVideoURL: (url) => set(() => ({ currentVideoURL: url, autoplay: 1 }))
}))

export default useStore