export interface Chat {
  id: number;
  first_name?: string | null; // only if private
  username?: string | null; // only if private
  title?: string | null; // only if group
  type: 'private' | 'group';
  all_members_are_administrators?: boolean | null; // only if group
}

/* PRIVATE
  chat: {
    id: 1469731081,
    first_name: 'Santiago',
    username: 'santiago_smg',
    type: 'private'
  },
/* GROUP
  chat: {
    id: -992353126,
    title: 'NEST_TEST_GROUP',
    type: 'group',
    all_members_are_administrators: true
  },
*/
