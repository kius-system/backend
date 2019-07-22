import {Entity, model, property} from '@loopback/repository';

@model()
export class Horario extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_horario: number;

  @property({
    type: 'number',
    required: true,
  })
  dia: string;

  @property({
    type: 'date',
    required: true,
  })
  hora_fin: string;

  @property({
    type: 'date',
    required: true,
  })
  hora_inicio: string;


  constructor(data?: Partial<Horario>) {
    super(data);
  }
}
