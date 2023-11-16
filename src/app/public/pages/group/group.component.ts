import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = [];
  constructor(private gs: GroupService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.groupsData = await this.gs.getGroup();
  }
  async deleteGroup(groupId: number): Promise<void> {
    await this.gs.deleteGroup(groupId);
  }

  agregargroup() {
    this.router.navigate(['/newgroup']);
  }
}
