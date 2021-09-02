'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: 'user ID' },
    name: { type: STRING(30), comment: 'user name' },
    dob: { type: DATE, comment: 'date of birth' },
    address: { type: STRING(64), comment: 'user address' },
    description: { type: STRING(128), comment: 'user description' },
    created_at: { type: DATE, comment: 'user created date' },
    updated_at: { type: DATE, comment: 'user updated date' },
  });

  return User;
};
