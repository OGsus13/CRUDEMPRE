import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpresaModel } from '../../../models/Empresa.model';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel();

  @Input() idEmpresa: string = "";

  @Output() emitterActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly empresaService: EmpresaService) { }

  ngOnInit(): void {

    this.empresaService.getEmpresa(this.idEmpresa)
    .then((res: any) => {
      this.empresa = res.cont.empresa;
    })
    .catch((err: any) => {});

  }

  actualizarEmpresa(forma: NgForm){
    this.empresaService.putEmpresa(this.empresa, this.idEmpresa)
    .then((res: any) => {
      Swal.fire({
        icon: "success",
        text: "Se actualizó los datos correctamente"
      });
      forma.reset();

      this.emitterActualizacion.emit();
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        text: "Error al actualizar datos"
      });
    });
  }

  limpiarForma(forma: NgForm){ 
    forma.reset(); 
  }

}

