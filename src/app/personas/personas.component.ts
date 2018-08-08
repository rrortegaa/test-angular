import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona'
import { personasList } from '../mock-personas'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  persona: Persona
  personas: Persona[]
  titulo:string = '--Personas--'
  constructor(private personaService: PersonaService) { 

  }

  ngOnInit() {
    this.getPersonas()
  }

  getPersonas(): void {
    this.personaService.getPersonas()
      .subscribe(personas => this.personas = personas)
  }

  cancel() {
    this.persona = null
  }
}