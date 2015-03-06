'use strict';

var regions = require('./aws-regions.json');
var types = require('./aws-ec2-types.json');

exports.regions = regions;
exports.types = types;

/**
 * Get the AWS regions, either as an object containing 'friendly names' (`keyOnly` is falsey), or as an array of zone codes (`keyOnly` is truthy).
 * Usage:
 *   - `getRegions()` - return the region codes and names.
 *   - `getRegions(true)` - return only the region codes.
 *   - `getRegions(false)` - return the region codes and names.
 *
 * @param  {Boolean} keyOnly Whether we should only return keys or the entire `regions` object.
 * @return {Array|Object} If `keyOnly` is truthy returns an array, otherwise returns an object.
 */
exports.getRegions = function getRegions(keyOnly) {
  return (keyOnly) ? Object.keys(regions) : regions;
};

/**
 * Get a list of AWS EC2 instance types, and optionally filter them.
 * Usage:
 *   - `getTypes()` - returns all EC2 instance types.
 *   - `getTypes([])` - returns all EC2 instance types.
 *   - `getTypes('c3.')` - return only c3.* instance types.
 *   - `getTypes('m3.', 'c4.')` - return m3.* and c4.* instance types.
 *   - `getTypes(['m3.', 'c4.'])` - return m3.* and c4.* instance types.
 *
 * @param  {Array|String} filter An array of EC2 name filters, or a String of filter names.
 * @return {Array} An array of AWS EC2 instance types.
 */
exports.getTypes = function getTypes(filter) {
  // If you passed more than one argument, let's assume it is just a bunch of strings.
  if (arguments.length > 1) {
    // Convert into a real-live Array.
    filter = Array.prototype.slice.call(arguments);
  }

  // Convert a string into an array
  if (typeof filter === 'string') {
    filter = filter.split(',').map(function (value) {
      // Trim any unwanted leading or trailing whitespace.
      return value.trim();
    });
  }

  // If the `filter` instance isn't an Array, just give up and return all the AWS instance types.
  if (!Array.isArray(filter)) {
    return types;
  }

  return types.filter(function (type) {
    return new RegExp('^(' + filter.join('|') + ')').test(type);
  });
};
