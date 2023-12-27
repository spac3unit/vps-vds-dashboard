import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import images from './images';
import classes from './OsPicker.module.css';
import { IconBrandUbuntu } from '@tabler/icons-react';


const data = [
    { label: 'Ubuntu 20.04', icon: IconBrandUbuntu },
    { label: 'Debian', icon: IconBrandUbuntu },
    { label: 'Fedora', icon: IconBrandUbuntu },
    { label: 'ArchLinux', icon: IconBrandUbuntu },
];

export function OsPicker() {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item
            leftSection={<item.icon className={classes.linkIcon} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
        >
            <Menu.Target>
                <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
                    <Group gap="xs">
                        <selected.icon className={classes.linkIcon} />
                        <span className={classes.label}>{selected.label}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}