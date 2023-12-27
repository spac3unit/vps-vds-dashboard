import { Tabs, rem } from '@mantine/core';
import classes from './LocationPicker.module.css';

export function LocationPicker() {
    return (
        <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
            <Tabs.List grow>
                <Tabs.Tab
                    value="settings"
                    // leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}
                    leftSection="🇷🇺"
                >
                    Казань
                </Tabs.Tab>
                <Tabs.Tab
                    value="messages"
                    leftSection="🇷🇺"
                >
                    Москва
                </Tabs.Tab>
                <Tabs.Tab
                    value="gallery"
                    leftSection="🇬🇪"
                >
                    Тбилиси
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}