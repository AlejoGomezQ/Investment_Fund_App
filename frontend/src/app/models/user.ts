import { Fund } from './fund';

export interface User {
  name: string;
  balance: number;
  funds: Fund[];
}
