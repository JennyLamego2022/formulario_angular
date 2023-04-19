import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
// import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  momentForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
   this.momentForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required])
   })
  }

  get name (){
    return this.momentForm.get('name')!;
  }
  get email (){
    return this.momentForm.get('email')!;
  }
  get endereco (){
    return this.momentForm.get('endereco')!;
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
  console.log("Enviou formulário")
}

}
