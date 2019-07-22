import {DefaultCrudRepository} from '@loopback/repository';
import {Horario} from '../models';
import {DbMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HorarioRepository extends DefaultCrudRepository<
  Horario,
  typeof Horario.prototype.id_horario
> {
  constructor(
    @inject('datasources.dbMysql') dataSource: DbMysqlDataSource,
  ) {
    super(Horario, dataSource);
  }
}
