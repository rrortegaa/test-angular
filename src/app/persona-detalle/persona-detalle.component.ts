import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonaService } from '../persona.service'

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  @Input() persona: Persona
  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPersona()
  }

  getPersona(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personaService.getPersona(id)
      .subscribe(persona => this.persona = persona);
  }

  goBack(): void {
    this.location.back()
  }

}
