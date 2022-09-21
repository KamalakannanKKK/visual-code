import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleserviceService {

  constructor() { }
  getapp():string{
  return "Hello World";
  }
}
