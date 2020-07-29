import { Injectable } from '@nestjs/common';

@Injectable()
export class RouterService {
  getUserList(): string {
    return 'Hello Router!';
  }
  createUser(name: string): string {
    return `创建新用户:${name}`;
  }
  updateUser(name: string): string {
    return `更新用户:${name}`;
  }
  deleteUser(name: string): string {
    return `删除用户:${name}`;
  }
}
