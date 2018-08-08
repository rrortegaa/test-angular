import { Injectable } from '@angular/core';
import { Persona } from './persona'
import { personasList } from './mock-personas'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(personasList);
  }
  getPersona(id: number): Observable<Persona> {
    return of(personasList.find(persona => persona.id === id));
  }
}
