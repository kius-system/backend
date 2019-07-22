import {DefaultCrudRepository} from '@loopback/repository';
import {Servicio} from '../models';
import {DbMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id_servicio
> {
  constructor(
    @inject('datasources.dbMysql') dataSource: DbMysqlDataSource,
  ) {
    super(Servicio, dataSource);
  }
}
