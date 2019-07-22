import {Entity, model, property} from '@loopback/repository';

@model()
export class Servicio extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_servicio: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  duracion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}
