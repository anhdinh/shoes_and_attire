import {DBConfig} from "ngx-indexed-db";

export const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'data-local',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'is-login', keypath: 'is-login', options: { unique: false } },
    ]
  }]
};
