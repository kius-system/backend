import {Entity, model, property} from '@loopback/repository';

@model()
export class Rubro extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_rubro: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Rubro>) {
    super(data);
  }
}
