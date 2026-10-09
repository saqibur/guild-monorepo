export type Role = "admin" | "committee" | "mentor" | "player";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
