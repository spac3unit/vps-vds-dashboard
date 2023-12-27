"use client"
import { AppShell, Burger, Group, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from '@/components/sidebar';
import { AvatarMenu } from '@/components/avatar-menu';

export default function Shell({ children }: any) {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Flex justify="space-between" styles={{ root: { height: '100%', padding: '0 16px' } }}>
                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
                        <div>vds-vps.com</div>
                    </Group>

                    <AvatarMenu />
                </Flex>

            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Sidebar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}