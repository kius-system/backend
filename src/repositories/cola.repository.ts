import {DefaultCrudRepository} from '@loopback/repository';
import {Cola} from '../models';
import {DbMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ColaRepository extends DefaultCrudRepository<
  Cola,
  typeof Cola.prototype.id_cola
> {
  constructor(
    @inject('datasources.dbMysql') dataSource: DbMysqlDataSource,
  ) {
    super(Cola, dataSource);
  }
}
