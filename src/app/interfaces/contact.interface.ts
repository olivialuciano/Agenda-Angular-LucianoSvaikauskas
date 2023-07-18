export interface Contact {
  id: number;
  name: string;
  telephoneNumber?: number;
  celularNumber?: number;
  description: string;
}

export interface ContactJsonPlaceholder {
  id: number;
  name?: string;
  telephoneNumber?: number;
  celularNumber?: number;
  description?: string;
}
