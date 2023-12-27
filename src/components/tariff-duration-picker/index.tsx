import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './TariffDurationPicker.module.css';

export function TariffDurationPicker() {
    return (
        <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
            <Tabs.List >
                <Tabs.Tab
                    value="1month"
                    leftSection=""
                >
                    Месяц
                </Tabs.Tab>
                <Tabs.Tab
                    value="3month"
                    leftSection=""
                >
                    3 Месяца
                </Tabs.Tab>
                <Tabs.Tab
                    value="6month"
                    leftSection=""
                >
                    6 месяцев
                </Tabs.Tab>
                <Tabs.Tab
                    value="1year"
                    leftSection=""
                >
                    Год
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}