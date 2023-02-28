import React from 'react'

import './videoEmbed.css'

const VideoEmbed = () => {
    return (
        <div className='videoWrapper'>
            <iframe
                width='560'
                height='349'
                src='https://www.youtube.com/embed/kIVEli-WW54'
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