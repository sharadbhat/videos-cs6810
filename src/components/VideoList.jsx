import { Accordion, Box } from '@mantine/core'

// Utils
import useStore from '../utils/store'
import videos from '../utils/videoList.json'

const VideoList = () => {
    const currentVideoURL = useStore((state) => state.currentVideoURL)
    const changeVideoURL = useStore((state) => state.changeVideoURL)

    let content = []
    let i = 0
    videos.forEach(videoGroup => {
        let j = 1
        let panelContent = []
        let urls = new Set()
        videoGroup.videos.forEach(url => {
            urls.add(url)
            panelContent.push(
                <Box
                    style={{ height: 40 }}
                    component='a'
                    onClick={() => changeVideoURL(url)}
                    sx={(theme) => ({
                        display: 'flex',
                        textAlign: 'left',
                        backgroundColor: url === currentVideoURL ? theme.colors.dark[3] : theme.colors.dark[6],
                        color: url === currentVideoURL ? 'orange' : '#C1C2C5',
                        cursor: 'pointer',
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginTop: 5,

                        '&:hover': {
                            backgroundColor: url === currentVideoURL ? theme.colors.dark[3] : theme.colors.dark[5],
                        },
                    })}
                >
                    Part {j++}
                </Box>
            )
        })

        content.push(
            <Accordion.Item key={i.toString()} value={i.toString()}>
                <Accordion.Control
                    style={{
                        backgroundColor: urls.has(currentVideoURL) ? '#5c5f66' : '#25262b',
                        color: urls.has(currentVideoURL) ? 'orange' : '#C1C2C5',
                        lineHeight: 1.5
                    }}
                >
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
        <Accordion radius='xs' multiple={true} variant='contained' defaultValue={['0']}>
            {content}
        </Accordion>
    )
}

export default VideoList