export interface Block {
  id: string;
  hasItem: boolean;
  clicked: boolean;
}

export interface Ingredient {
  name: string;
  price: number;
  image: string;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  activity: boolean;
  role: string;
}

export interface UserFormType {
  name: string;
  email: string;
  activity: boolean;
  role: string;
}
