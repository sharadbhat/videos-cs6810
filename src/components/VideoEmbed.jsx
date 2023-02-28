import React from 'react'

// Utils
import useStore from '../utils/store'

// CSS
import './videoEmbed.css'

const VideoEmbed = () => {
    const currentVideoURL = useStore((state) => state.currentVideoURL)
    
    return (
        <div className='videoWrapper'>
            <iframe
                width='560'
                height='349'
                src={currentVideoURL}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default VideoEmbed