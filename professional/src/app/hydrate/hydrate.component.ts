import {
  Component,
  inject,
  input,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-hydrate',
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss',
})
export class HydrateComponent {
  nameUser = input('NN');
  options = signal(['pineapple', 'banana', 'coco', 'grape']);
  choice = linkedSignal(() => this.options()[0]);
  userId = input<number>();
  userService = inject(UsersService);
  user = resource({
    request: () => this.userId(),
    loader: async ({ request: id }) => await this.userService.getUser(id),
  });

  constructor() {
    console.log(this.choice());
    this.choice.set('watermelom');
    console.log(this.choice());
    this.options.set(['mango', 'peach', 'blueberry']);
    console.log(this.choice());
  }
}
