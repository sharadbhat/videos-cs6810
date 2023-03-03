// Utils
import useStore from '../utils/store'

// CSS
import './videoEmbed.css'

const VideoEmbed = () => {
    const currentVideoURL = useStore((state) => state.currentVideoURL)
    const autoplay = useStore((state) => state.autoplay)
    
    return (
        <div className='videoWrapper'>
            <iframe
                width='560'
                height='349'
                src={`https://www.youtube.com/embed/${currentVideoURL}?autoplay=${autoplay}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                style={{ border: 0 }}
            >
            </iframe>
        </div>
    )
}

export default VideoEmbed