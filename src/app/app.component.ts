import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';
  msg:string="";
  employees=[
    {'name':'Fazt',position:'manager',email:"fatz@gmail.com"},
    {'name':'Juan',position:'Designer',email:"juan@gmail.com"},
    {'name':'Pedro',position:'Programmer',email:"pedro@gmail.com"},
  ];
  model:any={};
  model2:any={};
  hideUpdate:boolean=true;
  myValue: number | undefined;
  addEmployee():void{
      this.employees.push(this.model);
      this.msg='Campo Agregado';
  }
  deleteEmployee(i:number):void{
    var answer=confirm('¿Estás seguro de eliminarlo?');
    if(answer){
      this.employees.splice(i,1);
      this.msg='Campo Eliminado';
    }
    
  }
  
  editEmployee(i:number):void{
    this.hideUpdate=false;
      this.model2.name=this.employees[i].name;
      this.model2.position=this.employees[i].position;
      this.model2.email=this.employees[i].email;
      this.myValue=i;

  }
  updateEmployee():void{
    let i=this.myValue;
    for(let j=0;j<this.employees.length;j++){
      if(i==j){
        this.employees[i]=this.model2;
        this.model2={};
        this.msg='Campo Actualizado';
      }
    }
  }
  closeAlert():void{
    this.hideUpdate=true;
    this.msg='';
  }
}
