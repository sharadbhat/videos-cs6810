import React from 'react'
import { Accordion, Button } from '@mantine/core'

// Utils
import useStore from '../utils/store'
import videos from '../utils/videoList.json'

const VideoList = () => {
    const changeVideoURL = useStore((state) => state.changeVideoURL)

    let content = []
    let i = 0
    videos.forEach(videoGroup => {
        let j = 1
        let panelContent = []
        videoGroup.videos.forEach(url => {
            panelContent.push(
                <Button onClick={() => changeVideoURL(url)}>
                    Part {j++}
                </Button>
            )
        })

        content.push(
            <Accordion.Item key={i.toString()} value={i.toString()} style={{ padding: 0 }}>
                <Accordion.Control>
                    {videoGroup.topicName}
                </Accordion.Control>
                <Accordion.Panel>
                    {panelContent}
                </Accordion.Panel>
            </Accordion.Item>
        )
        i++
    })

    return (
        <Accordion multiple={true} variant='contained' defaultValue={['0']}>
            {content}
        </Accordion>
    )
}

export default VideoList