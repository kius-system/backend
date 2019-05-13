import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'number',
    required: true,
  })
  capacidad_simultanio: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: false
  })
  turnos?: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true
  })
  horarios?: object[];

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
  servicios?: object[];


  constructor(data?: Partial<Cola>) {
    super(data);
  }
}
