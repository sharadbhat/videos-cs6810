import {
    MantineProvider,
    AppShell,
    Navbar,
    ScrollArea
} from '@mantine/core'

// Components
import VideoList from './components/VideoList'
import VideoEmbed from './components/VideoEmbed'

export default function App() {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            <AppShell
                padding='md'
                navbar={
                    <Navbar width={{ base: 300 }} height={'100%'}>
                        <ScrollArea style={{ height: '100%' }}>
                            <VideoList />
                        </ScrollArea>
                    </Navbar>
                }
            >
                <VideoEmbed />
            </AppShell>
        </MantineProvider>
    );
}