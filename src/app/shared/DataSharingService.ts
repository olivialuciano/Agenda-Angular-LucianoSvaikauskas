import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private idContactoParaEditarSource = new BehaviorSubject<number>(0);
  idContactoParaEditar$ = this.idContactoParaEditarSource.asObservable();

  constructor() {}

  setIdContactoParaEditar(id: number) {
    this.idContactoParaEditarSource.next(id);
  }
}
