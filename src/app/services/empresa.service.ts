import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { EmpresaModel } from '../models/Empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  
  url: string = `${environment.urlApi}/empresa`;
  matricula: string = environment.matricula;

  constructor(private readonly http: HttpClient) { 
    
  }
  getEmpresas(){
    return lastValueFrom(this.http.get(`${this.url}`, {params: {matricula: this.matricula}}));
  }
  getEmpresa(idEmpresa: string){
    return lastValueFrom(this.http.get(`${this.url}/${idEmpresa}`, {params: {matricula: this.matricula}}));
  }

  getEmpresaByName(nombre: string){
    return lastValueFrom(this.http.get(`${this.url}`, {params:{matricula: this.matricula, termino: nombre}}));
  }

  postEmpresa(empresa: EmpresaModel){
    return lastValueFrom(this.http.post(`${this.url}`, empresa, {params: {matricula: this.matricula}}));
  }

  putEmpresa(empresa: EmpresaModel, idEmpresa: string){
    return lastValueFrom(this.http.put(`${this.url}/${idEmpresa}`, empresa, {params: {matricula: this.matricula}}));
  }
  delEmpresa(idEmpresa: any){
    return lastValueFrom(this.http.delete(`${this.url}/${idEmpresa}`, {params: {matricula: this.matricula}}));
  }

}

