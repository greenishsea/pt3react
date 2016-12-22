/*
 * Cached hasOwnProperty for safty use
 *
 * usage:
 * 1. import
 * 2. has.call(targetObject, targetKey)
 *
 */
export const has = Object.prototype.hasOwnProperty;
