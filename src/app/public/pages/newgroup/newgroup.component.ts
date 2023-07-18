import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-newgroup',
  templateUrl: './newgroup.component.html',
  styleUrls: ['./newgroup.component.scss'],
})
export class NewgroupComponent implements OnInit {
  groupData: GroupJsonPlaceholder = {
    id: 0,
    name: '',
  };

  constructor(
    private gs: GroupService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      const sub: any = params['id'] || null;
    });
  }

  async newgroup(form: NgForm) {
    console.log(form.value);
    const grupocreado = this.gs.addGroup(this.groupData);
    this.router.navigate(['/group']);
  }
}
