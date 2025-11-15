import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUser(id: number): string {
    return 'Samy OGH';
  }
}
