export interface Chat {
  id: number;
  title?: string; // only if group
  first_name: string;
  username: string;
  type: 'private' | 'group';
  all_members_are_administrators?: boolean; // only if group
}
