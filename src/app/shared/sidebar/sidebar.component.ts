import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  // tslint:disable-next-line: variable-name
  constructor(public _sidebar: SidebarService, public usuarioService: UsuarioService) {
  }
  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this._sidebar.cargarMenu();
  }
}
