import { Component, Input, OnInit } from '@angular/core';
import { GroupComponent } from '../../pages/group/group.component';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css'],
})
export class GroupCardComponent implements OnInit {
  constructor(private cc: GroupComponent, private router: Router) {}

  @Input() group: GroupJsonPlaceholder = {
    //recibe los datos del grupo
    id: 0,
    nombre: '',
  };
  ngOnInit(): void {}
}
