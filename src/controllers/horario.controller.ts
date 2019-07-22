import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Horario} from '../models';
import {HorarioRepository} from '../repositories';

export class HorarioController {
  constructor(
    @repository(HorarioRepository)
    public horarioRepository : HorarioRepository,
  ) {}

  @post('/horarios', {
    responses: {
      '200': {
        description: 'Horario model instance',
        content: {'application/json': {schema: {'x-ts-type': Horario}}},
      },
    },
  })
  async create(@requestBody() horario: Horario): Promise<Horario> {
    return await this.horarioRepository.create(horario);
  }

  @get('/horarios/count', {
    responses: {
      '200': {
        description: 'Horario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Horario)) where?: Where,
  ): Promise<Count> {
    return await this.horarioRepository.count(where);
  }

  @get('/horarios', {
    responses: {
      '200': {
        description: 'Array of Horario model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Horario}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Horario)) filter?: Filter,
  ): Promise<Horario[]> {
    return await this.horarioRepository.find(filter);
  }

  @patch('/horarios', {
    responses: {
      '200': {
        description: 'Horario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() horario: Horario,
    @param.query.object('where', getWhereSchemaFor(Horario)) where?: Where,
  ): Promise<Count> {
    return await this.horarioRepository.updateAll(horario, where);
  }

  @get('/horarios/{id}', {
    responses: {
      '200': {
        description: 'Horario model instance',
        content: {'application/json': {schema: {'x-ts-type': Horario}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Horario> {
    return await this.horarioRepository.findById(id);
  }

  @patch('/horarios/{id}', {
    responses: {
      '204': {
        description: 'Horario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() horario: Horario,
  ): Promise<void> {
    await this.horarioRepository.updateById(id, horario);
  }

  @put('/horarios/{id}', {
    responses: {
      '204': {
        description: 'Horario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() horario: Horario,
  ): Promise<void> {
    await this.horarioRepository.replaceById(id, horario);
  }

  @del('/horarios/{id}', {
    responses: {
      '204': {
        description: 'Horario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.horarioRepository.deleteById(id);
  }
}
