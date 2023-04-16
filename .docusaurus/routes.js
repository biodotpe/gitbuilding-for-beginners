import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gitbuilding-for-begineers/pt/markdown-page',
    component: ComponentCreator('/gitbuilding-for-begineers/pt/markdown-page', 'f1f'),
    exact: true
  },
  {
    path: '/gitbuilding-for-begineers/pt/docs',
    component: ComponentCreator('/gitbuilding-for-begineers/pt/docs', 'e6f'),
    routes: [
      {
        path: '/gitbuilding-for-begineers/pt/docs/category/gitbuilding---extras',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/category/gitbuilding---extras', 'c4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-begineers/pt/docs/category/gitbuilding-and-github-pages',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/category/gitbuilding-and-github-pages', 'd9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-begineers/pt/docs/intro',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/intro', '8cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-begineers/pt/docs/tutorial-basics-github/create-a-project-windows',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/tutorial-basics-github/create-a-project-windows', '5a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-begineers/pt/docs/tutorial-basics-github/deploy-website-github',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/tutorial-basics-github/deploy-website-github', '144'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-begineers/pt/docs/tutorial-extras/examples',
        component: ComponentCreator('/gitbuilding-for-begineers/pt/docs/tutorial-extras/examples', '279'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gitbuilding-for-begineers/pt/',
    component: ComponentCreator('/gitbuilding-for-begineers/pt/', '3e9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
