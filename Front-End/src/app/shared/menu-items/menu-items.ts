import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'home',
        short_label: 'H',
        name: 'Home',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'task',
        short_label: 'B',
        name: 'Tasks',
        type: 'sub',
        icon: 'ti-shopping-cart',
        children: [
          {
            state: 'create-task',
            name: 'Add New Task'
          },
          {
            state: 'assign-task',
            name: 'Assign Tasks'
          },
          {
            state: 'all-tasks',
            name: 'All Task'
          }
        ]
      },
        {
            state: 'client',
            short_label: 'C',
            name: 'Client',
            type: 'sub',
            icon: 'ti-shopping-cart',
            children: [
                {
                    state: 'create-client',
                    name: 'Add New Client'
                },
                {
                    state: 'all-client',
                    name: 'All Clients'
                }
            ]
        },
        {
            state: 'category',
            short_label: 'C',
            name: 'Category',
            type: 'sub',
            icon: 'ti-shopping-cart',
            children: [
                {
                    state: 'create-category',
                    name: 'Add New Category'
                },
                {
                    state: 'all-category',
                    name: 'All Category'
                }
            ]
        },
        {
            state: 'employee',
            short_label: 'B',
            name: 'Employee',
            type: 'sub',
            icon: 'ti-user',
            children: [
                {
                    state: 'create-employee',
                    name: 'Add New Employee'
                },
                {
                    state: 'all-employee',
                    name: 'All Employees'
                },
            ]
        },
    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
