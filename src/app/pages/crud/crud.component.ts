import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmpresaModel } from '../../models/Empresa.model';
import { EmpresaService } from '../../services/empresa.service';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  empresas: EmpresaModel [] = [];
  mostrarEmpresa: boolean = false;
  _idEmpresa: string = "";
  nombre: string = "";

  constructor(private readonly empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  obtenerEmpresas(){
    this.empresaService.getEmpresas()
    .then((res: any) => {
    
      this.empresas = res.cont.empresas;
      console.log(this.empresas);
      
    })
    .catch((err: any) => {
      this.empresas = [];
    });
  }

  eliminar(empresa: EmpresaModel){
    Swal.fire({
      icon: "question",
      text: `Estas seguro de que deseas eliminar a ${empresa.strNombre}?`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    })
    .then((res) => {
      if (res.isConfirmed) {
        this.empresaService.delEmpresa(empresa._id)
        .then((res: any) => {
          Swal.fire({
            icon: "info",
            text: "La Empresa se eliminó correctamente"
          });
          this.obtenerEmpresas();
        }).catch((err) => {
          
        });
      }
    })
    .catch((err: any) => {
      Swal.fire({
        icon: "error",
        text: "Error al eliminar Empresa"
      });
    });
  }

  buscarEmpresas(event: any){
    if (event.target.value.length >= 0) {
      this.empresaService.getEmpresaByName(this.nombre)
    .then((result: any) => {
      this.empresas = result.cont.empresas;
      
    }).catch((err) => {
      this.empresas = [];
    });
    }
  }

  showUpdate(_idEmpresa: any){
    this.mostrarEmpresa = true;
    this._idEmpresa = _idEmpresa;
  }

  showLogo(UrlLogo: string){
    Swal.fire({
      title: 'COMPANIE',
      text: 'THIS IS YOUR COMPANY.',
      imageUrl: UrlLogo,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'THANKS',
    })
  }

  refreshTable(){
    this.mostrarEmpresa = false;
   
    this.obtenerEmpresas();
  }
}
