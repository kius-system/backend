import {DefaultCrudRepository} from '@loopback/repository';
import {Rubro} from '../models';
import {DbMysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RubroRepository extends DefaultCrudRepository<
  Rubro,
  typeof Rubro.prototype.id_rubro
> {
  constructor(
    @inject('datasources.dbMysql') dataSource: DbMysqlDataSource,
  ) {
    super(Rubro, dataSource);
  }
}
