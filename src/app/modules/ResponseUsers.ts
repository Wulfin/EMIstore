import {User} from "./User";

export class ResponseUsers {
  users: User[]
  total: number
  skip: number
  limit: number

  constructor(users: User[], total: number, skip: number, limit: number) {
    this.users = users;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }
}
