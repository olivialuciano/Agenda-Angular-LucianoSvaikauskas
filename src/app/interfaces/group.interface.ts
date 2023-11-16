import { ContactJsonPlaceholder } from './contact.interface';

export interface AllGroup {
  id: number;
  name: string;
  contacts: ContactJsonPlaceholder[];
}

export interface GroupJsonPlaceholder {
  id?: number;
  name: string;
}

export interface iGroupandContact {
  groupId: number;
  contactId: number;
}
