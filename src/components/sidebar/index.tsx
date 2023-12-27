"use client"
import { useState } from 'react';
import Link from 'next/link';
import {
    IconFingerprint,
    IconKey,
    IconSettings,
    IconDatabaseImport,
    IconReceipt2,
    IconServer,
    IconLogout,
    IconHelp,
    IconList
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';

const data = [
    { link: '/', label: 'Создать сервер', icon: IconServer },
    { link: 'services', label: 'Мои услуги', icon: IconList },
    { link: 'finance', label: 'Финансы', icon: IconReceipt2 },
    { link: '', label: 'Безопасность', icon: IconFingerprint },
    { link: '', label: 'SSH Ключи', icon: IconKey },
    { link: '', label: 'Базы данных', icon: IconDatabaseImport },
    // { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Настройки', icon: IconSettings },
];

export function Sidebar() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                // event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                {/* <Group className={classes.header} justify="space-between">
          vds-vps.com
          <Code fw={700}>v3.1.2</Code>
        </Group> */}
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconHelp className={classes.linkIcon} stroke={1.5} />
                    <span>Помощь</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Выйти</span>
                </a>
            </div>
        </nav>
    );
}