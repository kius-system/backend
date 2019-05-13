import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './db-mysql.datasource.json';

export class DbMysqlDataSource extends juggler.DataSource {
  static dataSourceName = 'dbMysql';

  constructor(
    @inject('datasources.config.dbMysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
