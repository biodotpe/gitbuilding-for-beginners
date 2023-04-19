import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gitbuilding-for-beginners/pt/markdown-page',
    component: ComponentCreator('/gitbuilding-for-beginners/pt/markdown-page', '0f4'),
    exact: true
  },
  {
    path: '/gitbuilding-for-beginners/pt/docs',
    component: ComponentCreator('/gitbuilding-for-beginners/pt/docs', '780'),
    routes: [
      {
        path: '/gitbuilding-for-beginners/pt/docs/category/gitbuilding---extras',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/category/gitbuilding---extras', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-beginners/pt/docs/category/gitbuilding-and-github-pages',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/category/gitbuilding-and-github-pages', '0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-beginners/pt/docs/intro',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/intro', 'd36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/create-a-project-windows',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/create-a-project-windows', 'c77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/deploy-website-github',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/tutorial-basics-github/deploy-website-github', 'b03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gitbuilding-for-beginners/pt/docs/tutorial-extras/examples',
        component: ComponentCreator('/gitbuilding-for-beginners/pt/docs/tutorial-extras/examples', '890'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gitbuilding-for-beginners/pt/',
    component: ComponentCreator('/gitbuilding-for-beginners/pt/', '671'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
