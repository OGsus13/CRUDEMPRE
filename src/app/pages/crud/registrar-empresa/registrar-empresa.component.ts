import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import Swal from 'sweetalert2';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {
  empresa: EmpresaModel = new EmpresaModel();
  @Output () emitterRegistro: EventEmitter<any> = new EventEmitter();
  
  constructor(private readonly EmpresasService: EmpresaService) { }

  ngOnInit(): void {
  }
  registrarEmpresa(forma: NgForm){
    this.EmpresasService.postEmpresa(this.empresa)
    .then((res: any) => {
      Swal.fire({
        icon:'success',
        text: "Se registró la Empresa Exitosamente"
      });
      forma.reset();
      
      this.emitterRegistro.emit();
    })
    .catch((err: any) => {
      Swal.fire({
        icon:'error',
        text: "Error al Registrar Empresa"
      });
    });

    console.log(this.empresa);
    
  }

  limpiarForma(forma: NgForm){
    forma.reset();
  }
}

