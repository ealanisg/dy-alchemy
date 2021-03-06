/* eslint-disable max-classes-per-file */

class DefaultItemNotFoundError extends Error {
  constructor() {
    super('Item not found.');
  }
}
module.exports.DefaultItemNotFoundError = DefaultItemNotFoundError;

class DefaultItemExists extends Error {
  constructor() {
    super('Item exists.');
  }
}
module.exports.DefaultItemExistsError = DefaultItemExists;

class InvalidPageCursor extends Error {
  constructor() {
    super('Invalid Page Cursor.');
  }
}
module.exports.InvalidPageCursor = InvalidPageCursor;

class InvalidCondition extends Error {
  constructor(context) {
    super(`Invalid condition provided\n${context}`);
  }
}
module.exports.InvalidCondition = InvalidCondition;

class ConditionNotImplemented extends Error {
  constructor() {
    super('Condition not implemented');
  }
}
module.exports.ConditionNotImplemented = ConditionNotImplemented;

class CannotUpdatePrimaryKeys extends Error {
  constructor() {
    super('Cannot update "primaryKeys" attributes.');
  }
}
module.exports.CannotUpdatePrimaryKeys = CannotUpdatePrimaryKeys;

class StringIdRequired extends Error {
  constructor() {
    super('Must provide id as String.');
  }
}
module.exports.StringIdRequired = StringIdRequired;

class StringIdDisallowed extends Error {
  constructor() {
    super('Cannot provide id as String.');
  }
}
module.exports.StringIdDisallowed = StringIdDisallowed;

class IncompletePrimaryKey extends Error {
  constructor() {
    super('All keys in "primaryKey" must be provided.');
  }
}
module.exports.IncompletePrimaryKey = IncompletePrimaryKey;
