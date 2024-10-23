import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [],
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent {
@Input() btnText!: string;


  constructor() {}

  ngOnInit(): void {
    
  }
}
