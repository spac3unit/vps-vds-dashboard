import { useState } from 'react';
import { Tabs, Title, Text, Box, Group, Stack } from '@mantine/core';
import classes from './TariffPicker.module.css';
// import tariffItemClasses from './TariffItemPicker.module.css';

export function TariffPicker() {
    const [activeTariffType, setActiveTariffType] = useState<string | null>('first');

    return (
        <Tabs value={activeTariffType} onChange={setActiveTariffType} classNames={classes}>
            {/* Tabs List */}
            <Tabs.List grow>
                <Tabs.Tab value="first" >
                    <Title order={3} mb="sm">Shared</Title>
                    <Text size="sm" style={{ whiteSpace: 'normal' }}>Облачные серверы с базовой DDoS-защитой по сбалансированной цене на базе процессора AMD Ryzen 9 7950X3D с накопителями NVMe и общим vCPU. Идеальный вариант для таких задач, как размещение веб-сайтов, VPN или разработки проектов. Вложенная виртуализация отключена.</Text>
                </Tabs.Tab >
                <Tabs.Tab value="second">
                    <Title order={3} mb="sm">Dedicated</Title>
                    <Text size="sm" style={{ whiteSpace: 'normal' }}>Облачные серверы высшего уровня с базовой DDoS-защитой и гарантированными ресурсами процессора AMD Ryzen 9 7950X3D и хранилищем NVMe с RAM Cache для самых требовательных задач, например 1С, Битрикс или размещение высоконагруженных сервисов. Вложенная виртуализация отключена.</Text>
                </Tabs.Tab>
            </Tabs.List>

            {/* Tabs Panels */}
            <Tabs.Panel value="first"><Tariffs /></Tabs.Panel>
            <Tabs.Panel value="second">Second panel</Tabs.Panel>
        </Tabs>
    );
}


function Tariffs() {
    const [activeTariff, setActiveTariff] = useState<string | null>('first');

    return (
        <Tabs value={activeTariff} onChange={setActiveTariff} orientation="vertical" classNames={{
            ...classes,
            list: classes.tariffItemTabList,
            tab: classes.tariffItemTab,
            tabLabel: classes.tariffItemTabLabel
        }}
            style={{ flexDirection: 'column' }}>
            <Tabs.List >
                <Tabs.Tab value="first" style={{ width: '100%' }}>
                    <Group justify="space-between" style={{ width: '100%' }}>
                        {/* Left */}
                        <Stack>
                            <Title order={4}>Small</Title>
                            <Group justify="space-between">
                                <Text size="sm">1 ядро</Text>
                                <Text size="sm">2 GB RAM </Text>
                                <Text size="sm">30 GB NVME </Text>
                            </Group>
                        </Stack>
                        {/* Right */}
                        <Stack>
                            <Text size="md">5,2 € /мес </Text>
                        </Stack>
                    </Group>

                </Tabs.Tab >
                <Tabs.Tab value="second">
                    <Group justify="space-between" style={{ width: '100%' }}>
                        {/* Left */}
                        <Stack>
                            <Title order={4}>Medium</Title>
                            <Group justify="space-between">
                                <Text size="sm">2 ядра</Text>
                                <Text size="sm">4 GB RAM </Text>
                                <Text size="sm">60 GB NVME </Text>
                            </Group>
                        </Stack>
                        {/* Right */}
                        <Stack>
                            <Text size="md">15,2 € /мес </Text>
                        </Stack>
                    </Group>
                </Tabs.Tab>

                <Tabs.Tab value="third">
                    <Group justify="space-between" style={{ width: '100%' }}>
                        {/* Left */}
                        <Stack>
                            <Title order={4}>Large</Title>
                            <Group justify="space-between">
                                <Text size="sm">4 ядра</Text>
                                <Text size="sm">8 GB RAM </Text>
                                <Text size="sm">120 GB NVME </Text>
                            </Group>
                        </Stack>
                        {/* Right */}
                        <Stack>
                            <Text size="md">25,2 € /мес </Text>
                        </Stack>
                    </Group>
                </Tabs.Tab>

                <Tabs.Tab value="fourth">
                    <Group justify="space-between" style={{ width: '100%' }}>
                        {/* Left */}
                        <Stack>
                            <Title order={4}>Extra Large</Title>
                            <Group justify="space-between">
                                <Text size="sm">8 ядра</Text>
                                <Text size="sm">16 GB RAM </Text>
                                <Text size="sm">240 GB NVME </Text>
                            </Group>
                        </Stack>
                        {/* Right */}
                        <Stack>
                            <Text size="md">35,2 € /мес </Text>
                        </Stack>
                    </Group>
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    )
}

