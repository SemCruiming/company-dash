import { DashboardOutlined, GlobalOutlined, ProjectOutlined, ReadOutlined, SettingOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined />
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/:new',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/:new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined />
        }
    },
    {
        name: 'news',
        list: '/news',
        create: '/news/:new',
        edit: '/news/edit/:id',
        meta: {
            label: 'News',
            icon: <GlobalOutlined />
        }
    },
    {
        name: 'reports',
        list: '/reports',
        create: '/reports/:new',
        edit: '/reports/edit/:id',
        meta: {
            label: 'Reports',
            icon: <ReadOutlined />
        }
    },
    {
        name: 'settings',
        list: '/settings',
        create: '/settings/:new',
        edit: '/settings/edit/:id',
        meta: {
            label: 'Settings',
            icon: <SettingOutlined />
        }
    }
]