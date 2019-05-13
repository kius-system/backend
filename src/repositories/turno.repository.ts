import {DefaultCrudRepository} from '@loopback/repository';
import {Turno} from '../models';
import {DbMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TurnoRepository extends DefaultCrudRepository<
  Turno,
  typeof Turno.prototype.id_turno
> {
  constructor(
    @inject('datasources.dbMysql') dataSource: DbMysqlDataSource,
  ) {
    super(Turno, dataSource);
  }
}
