import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  totalMedicos: number = 0;

  constructor(public http: HttpClient, public usuarioService: UsuarioService) { }

  cargarMedicos() {
    const url = URL_SERVICIOS + '/medico';
    return this.http.get(url).pipe(map((resp: any) => {
      this.totalMedicos = resp.total;
      return resp.medicos;
    }));
  }

  buscarMedicos(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get(url)
      .pipe(map((resp: any) => resp.medicos
      ));
  }

  borrarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.http.delete(url).pipe(map((resp: any) => {
      swal.fire('Médico borrado', 'Médico borrado correctamente', 'success');
      return resp;
    }));
  }

  guardarMedico(medico: Medico) {
    let url = URL_SERVICIOS + '/medico';

    if (medico._id) {
      url += '/' + medico._id;
      url += '?token=' + this.usuarioService.token;
      return this.http.put(url, medico).pipe(map((resp: any) => {
        swal.fire('Medico actualizado', medico.nombre, 'success');
        return resp.medico;
      }));
    } else {
      // creando
      url += '?token=' + this.usuarioService.token;
      return this.http.post(url, medico).pipe(map((resp: any) => {
        swal.fire('Médico creado', medico.nombre, 'success');
        return resp.medico;
      }));
    }

  }

  cargarMedico(id: string) {
    const url = URL_SERVICIOS + '/medico/' + id;

    return this.http.get(url).pipe(map((resp: any) => resp.medico));

  }
}
