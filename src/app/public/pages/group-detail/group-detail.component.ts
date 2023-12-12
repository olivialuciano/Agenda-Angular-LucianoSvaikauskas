import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AllGroup,
  GroupJsonPlaceholder,
} from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = [];

  constructor(
    private gs: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  group: AllGroup = {
    id: 0,
    name: '',
    contacts: [],
  };
  id: number | undefined;
  groupFound: boolean = true;

  ngOnInit(): void {
    this.getData();
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      this.checkAndLoadGroupDetails(this.id!);
    });
  }

  async getData(): Promise<void> {
    this.groupsData = await this.gs.getGroup();
  }

  async checkAndLoadGroupDetails(id: number) {
    const groupDetails = await this.gs.getGroupDetails(id);

    // Verificar si el grupo con el ID pertenece a la lista de grupos del usuario
    const isGroupInList = this.groupsData.some((group) => group.id == id);

    if (isGroupInList) {
      this.group = groupDetails;
    } else {
      console.log('El grupo no se encontró');
      this.groupFound = false;
    }
  }

  async deleteGroup(id: number) {
    console.log('Contacto', id, 'eliminado');
    const grupoeliminado = await this.gs.deleteGroup(id);
    if (grupoeliminado) this.router.navigate(['/group']);
  }
}
