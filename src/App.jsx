import {
    MantineProvider,
    AppShell,
    Navbar,
    useMantineTheme,
    ScrollArea
} from '@mantine/core'

// Components
import VideoList from './components/VideoList'
import VideoEmbed from './components/VideoEmbed'

export default function App() {
    const theme = useMantineTheme()
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell
                padding='md'
                navbar={
                    <Navbar width={{ base: 300 }} height={'100%'}>
                        <ScrollArea style={{ height: '100%' }}>
                            <VideoList />
                        </ScrollArea>
                    </Navbar>
                }
                styles={{
                    main: {
                        background: theme.colors.dark[8],
                    }
                }}
            >
                <VideoEmbed />
            </AppShell>
        </MantineProvider>
    );
}