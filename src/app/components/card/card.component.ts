import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Location;

}
