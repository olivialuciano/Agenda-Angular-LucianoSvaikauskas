import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllGroup } from 'src/app/interfaces/group.interface';

@Component({
  selector: 'app-group-select',
  templateUrl: './group-select.component.html',
  styleUrls: ['./group-select.component.scss']
})
export class GroupSelectComponent implements OnInit {
  @Input() groups:AllGroup = {} as AllGroup;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() valor:EventEmitter<number> = new EventEmitter<number>()

  cambiarvalor(valor:number){
    this.valor.next(valor)
  }

}
