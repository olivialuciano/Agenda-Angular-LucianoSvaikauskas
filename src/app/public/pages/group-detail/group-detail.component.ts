import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllGroup } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit {
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      this.getGroupDetails(this.id!);
    });
  }

  getGroupDetails(id: number) {
    this.gs.getGroupDetails(id).then((r) => (this.group = r));
  }

  async deleteGroup(id: number) {
    console.log('Contacto', id, 'eliminado');
    const grupoeliminado = await this.gs.deleteGroup(id);
    if (grupoeliminado) this.router.navigate(['/group']);
  }
}
