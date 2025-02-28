// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
    site: 'http://qa9283es425.vicp.fun:44124',
    base: '/llog/ps/docs',
    trailingSlash: 'always',
    integrations: [
        starlight({
            title: 'Ps插件',
            description: '基于AI的PS插件',
            plugins: [
                starlightOpenAPI([
                    {
                        base: 'api',
                        label: '接口文档',
                        schema: './api-docs.yaml',
                    },
                ]),
            ],
            social: {
                // github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                ...openAPISidebarGroups
            ],
        }),
        react(),
    ],
});