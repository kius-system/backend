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
import {Cola} from '../models';
import {ColaRepository} from '../repositories';

export class ColaController {
  constructor(
    @repository(ColaRepository)
    public colaRepository : ColaRepository,
  ) {}

  @post('/colas', {
    responses: {
      '200': {
        description: 'Cola model instance',
        content: {'application/json': {schema: {'x-ts-type': Cola}}},
      },
    },
  })
  async create(@requestBody() cola: Cola): Promise<Cola> {
    return await this.colaRepository.create(cola);
  }

  @get('/colas/count', {
    responses: {
      '200': {
        description: 'Cola model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Cola)) where?: Where,
  ): Promise<Count> {
    return await this.colaRepository.count(where);
  }

  @get('/colas', {
    responses: {
      '200': {
        description: 'Array of Cola model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Cola}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Cola)) filter?: Filter,
  ): Promise<Cola[]> {
    return await this.colaRepository.find(filter);
  }

  @patch('/colas', {
    responses: {
      '200': {
        description: 'Cola PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() cola: Cola,
    @param.query.object('where', getWhereSchemaFor(Cola)) where?: Where,
  ): Promise<Count> {
    return await this.colaRepository.updateAll(cola, where);
  }

  @get('/colas/{id}', {
    responses: {
      '200': {
        description: 'Cola model instance',
        content: {'application/json': {schema: {'x-ts-type': Cola}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Cola> {
    return await this.colaRepository.findById(id);
  }

  @patch('/colas/{id}', {
    responses: {
      '204': {
        description: 'Cola PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() cola: Cola,
  ): Promise<void> {
    await this.colaRepository.updateById(id, cola);
  }

  @put('/colas/{id}', {
    responses: {
      '204': {
        description: 'Cola PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cola: Cola,
  ): Promise<void> {
    await this.colaRepository.replaceById(id, cola);
  }

  @del('/colas/{id}', {
    responses: {
      '204': {
        description: 'Cola DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.colaRepository.deleteById(id);
  }
}
