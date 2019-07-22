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
import {Rubro} from '../models';
import {RubroRepository} from '../repositories';

export class RubroController {
  constructor(
    @repository(RubroRepository)
    public rubroRepository : RubroRepository,
  ) {}

  @post('/rubros', {
    responses: {
      '200': {
        description: 'Rubro model instance',
        content: {'application/json': {schema: {'x-ts-type': Rubro}}},
      },
    },
  })
  async create(@requestBody() rubro: Rubro): Promise<Rubro> {
    return await this.rubroRepository.create(rubro);
  }

  @get('/rubros/count', {
    responses: {
      '200': {
        description: 'Rubro model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Rubro)) where?: Where,
  ): Promise<Count> {
    return await this.rubroRepository.count(where);
  }

  @get('/rubros', {
    responses: {
      '200': {
        description: 'Array of Rubro model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Rubro}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Rubro)) filter?: Filter,
  ): Promise<Rubro[]> {
    return await this.rubroRepository.find(filter);
  }

  @patch('/rubros', {
    responses: {
      '200': {
        description: 'Rubro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() rubro: Rubro,
    @param.query.object('where', getWhereSchemaFor(Rubro)) where?: Where,
  ): Promise<Count> {
    return await this.rubroRepository.updateAll(rubro, where);
  }

  @get('/rubros/{id}', {
    responses: {
      '200': {
        description: 'Rubro model instance',
        content: {'application/json': {schema: {'x-ts-type': Rubro}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Rubro> {
    return await this.rubroRepository.findById(id);
  }

  @patch('/rubros/{id}', {
    responses: {
      '204': {
        description: 'Rubro PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() rubro: Rubro,
  ): Promise<void> {
    await this.rubroRepository.updateById(id, rubro);
  }

  @put('/rubros/{id}', {
    responses: {
      '204': {
        description: 'Rubro PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rubro: Rubro,
  ): Promise<void> {
    await this.rubroRepository.replaceById(id, rubro);
  }

  @del('/rubros/{id}', {
    responses: {
      '204': {
        description: 'Rubro DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rubroRepository.deleteById(id);
  }
}
