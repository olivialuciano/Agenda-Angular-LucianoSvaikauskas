import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss'],
})
export class EditcontactComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = [];
  constructor(private gs: GroupService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.groupsData = await this.gs.getGroup(); //rellena ContactData con todos los contactos de una agenda
  }
}
