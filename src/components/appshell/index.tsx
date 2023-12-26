"use client"
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from '@/components/sidebar';


export default function Shell({ children }: any) {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
                vds-vps.com
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Sidebar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}