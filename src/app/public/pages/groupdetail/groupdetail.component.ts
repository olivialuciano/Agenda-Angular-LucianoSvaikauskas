import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.component.html',
  styleUrls: ['./groupdetail.component.css']
})
export class GroupdetailComponent implements OnInit {

  constructor(private gc: GroupComponent, private router: Router) { }

  @Input() group: GroupJsonPlaceholder = {
    //recibe los datos del grupo
    id: 0,
    nombre: '',
  };

  ngOnInit() : void {}

  deleteGroup(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del grupo)
    console.log('grupo id: ', id, ' eliminado');
    this.gc.deleteGroup(id); //ejecuta el metodo deleteGroup() del group component
  }



}
