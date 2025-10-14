import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AccordionButtonDirective, AccordionComponent, AccordionItemComponent, ButtonDirective, FormCheckComponent, TemplateIdDirective } from '@coreui/angular';
import { AppService } from '../services/app.service';
import { dataFormalityInputs } from '../services/formality';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { pieceJointeFichier } from '../services/fichiersPieces';

@Component({
  selector: 'app-formalite',
  imports: [ReactiveFormsModule, CommonModule, ButtonDirective, RouterLink, FormCheckComponent],
  templateUrl: './formalite.component.html',
  styleUrl: './formalite.component.scss'
})
export class FormaliteComponent {
  id: string = ''
  name: string = ''
  inputs: any;
  form!: FormGroup;
  schema: any = {};

  fichiers: any;


  objectKeys = Object.keys;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.name = this.route.snapshot.paramMap.get('name')!;
    console.log(this.id)
    console.log(this.name)
    this.showBADInfo(this.id, this.name)
  }

  launchToggle(data: any) {
    console.log(data)
  }

  showBADInfo(ref: string, name: string) {
    this.inputs = dataFormalityInputs.filter(item => item.attribut == ref && item.formality == name)
    console.log(this.inputs)
    this.schema = this.inputs[0] ? this.inputs[0].form : {};

    console.log(this.schema)
    
    for (const key in this.schema) {
      if (this.schema[key].isArray == true) {
        delete this.schema[key]
      }
    }
    this.form = this.buildForm(this.schema);

    this.fichiers = pieceJointeFichier.filter(item => item.attribut == ref && item.formality == name)[0]?.fichier ?? []
    console.log(this.fichiers)
  }


  buildForm(schema: any): FormGroup {
    console.log(schema);
    const group: any = {};
    for (const key in schema) {
      if (schema[key].isArray != true) {
        group[key] = new FormControl({ value: '', disabled: true });
      }
    }
    return new FormGroup(group);
  }

  getFormArray(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

}
