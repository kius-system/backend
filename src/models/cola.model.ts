import {Entity, model, property} from '@loopback/repository';
import { Turno } from './turno.model';
import { Horario } from '.';

@model()
export class Cola extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_cola: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  /*@property({
    type: 'number',
    required: true,
  })
  capacidad_simultanio: number;
*/
  @property({
    type: 'array',
    itemType: 'object',
    required: true
  })
  horarios?: Horario[];
/*
  @property({
    type: 'array',
    itemType: 'object',
    required: true
  })
  rubros?: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true
  })
  servicios?: object[];*/


  constructor(data?: Partial<Cola>) {
    super(data);
  }
}
