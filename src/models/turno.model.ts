import {Entity, model, property} from '@loopback/repository';

@model()
export class Turno extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  estado: number;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_turno: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_hora_modificacion: string;

  @property({
    type: 'date',
    required: true,
  })
  hora: string;

  @property({
    type: 'number',
  })
  tipo_cita?: number;


  constructor(data?: Partial<Turno>) {
    super(data);
  }
}
