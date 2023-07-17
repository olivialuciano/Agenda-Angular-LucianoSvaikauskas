import { Component, Input, OnInit } from '@angular/core';
import { GroupComponent } from '../../pages/group/group.component';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
})
export class GroupCardComponent implements OnInit {
  constructor(
    private gc: GroupComponent,
    private router: Router,
    private gs: GroupService
  ) {}

  @Input() group: GroupJsonPlaceholder = {
    //recibe los datos del grupo
    id: 0,
    Name: '',
  };
  ngOnInit(): void {}

  groupData: any = {
    Name: 'Facultad',
  };
  isEditing = false;

  eliminarGrupo(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('grupo id: ', id, ' eliminado');
    this.gs.deleteGroup(id); //ejecuta el metodo deleteContacto() del contact component
  }
  editGrupo() {
    this.router.navigate(['/editgroup']);
  }
}
