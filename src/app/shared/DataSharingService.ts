import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private idContactoParaEditarSource = new BehaviorSubject<number>(0);
  idContactoParaEditar$ = this.idContactoParaEditarSource.asObservable();

  // Nuevo Subject para notificar que un contacto ha sido editado
  private contactoEditadoSource = new Subject<void>();
  contactoEditado$ = this.contactoEditadoSource.asObservable();

  constructor() {}

  setIdContactoParaEditar(id: number) {
    this.idContactoParaEditarSource.next(id);
    this.contactoEditadoSource.next(); // Emitir evento de contacto editado
  }

  // Agregar el método para emitir el evento de contacto editado
  emitContactoEditado() {
    this.contactoEditadoSource.next();
  }
}
