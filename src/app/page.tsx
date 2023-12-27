"use client"
import { Title, Input, Text, Stack, UnstyledButton } from '@mantine/core';
import { em, rem } from '@mantine/core';
import { LocationPicker } from '@/components/location-picker';
import { TariffPicker } from '@/components/tariff-picker';
import { TariffDurationPicker } from '@/components/tariff-duration-picker';
import { OsPicker } from '@/components/os-picker';

export default function MainPage() {
  return (
    <div>
      <Stack
        bg="var(--mantine-color-body)"
        gap="xs"
        mb="34px"
      >
        <Title >Создать новый сервер</Title>
        <Input.Wrapper label="" description="Название" style={{ width: rem(288) }} >
          <Input variant="filled" placeholder="Введите название" />
          <Text size="xs">На его основе мы установим hostname</Text>
        </Input.Wrapper>
      </Stack>

      <Stack mb="34px">
        <Title order={2}>Выбор локации</Title>
        <LocationPicker />
      </Stack>

      <Stack mb="34px">
        <Title order={2}>Выбор тарифа</Title>
        <TariffPicker />
      </Stack>

      <Stack mb="34px">
        <Title order={2}>Выбор операционной системы</Title>
        <OsPicker />
      </Stack>

      <Stack mb="34px">
        <Title order={2}>Выбор периода оплаты и оформление заказа</Title>
        <TariffDurationPicker />
      </Stack>
    </div>
  )
}



