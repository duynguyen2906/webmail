import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Sent mail',
    icon: 'nb-compose',
    children: [
      {
        title: 'Sent',
        link: '/pages/forms/inputs',
      },
    ],
  },
  {
    title: 'History',
    icon: 'nb-tables',
    children: [
      {
        title: 'List mail',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
