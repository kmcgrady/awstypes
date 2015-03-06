# awstypes

Get AWS EC2 instance types and AWS regions.

## Sources:
- http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
- http://aws.amazon.com/ec2/instance-types/

## API:
- `regions` - An object containing AWS zones (as keys) and friendly names (as values).
- `getRegions()` - A function which returns the AWS `regions` as an array of zone codes, or an object containing zone and friendly names.
- `types` - An array containing EC2 instance types.
- `getTypes()` - A function which returns EC2 instance types (optionally filtered by instance type prefix.

## Usage:

### `getRegions()`
- `getRegions()` - Return all the region codes and names.
- `getRegions(true)` - Return only the region codes.
- `getRegions(false)` - Return all the region codes and names.

### `getTypes()`
- `getTypes()` - Returns all EC2 instance types.
- `getTypes([])` - Returns all EC2 instance types.
- `getTypes('c3.')` - Return only c3.* instance types.
- `getTypes('m3.', 'c4.')` - Return m3.* and c4.* instance types.
- `getTypes(['m3.', 'c4.'])` - Return m3.* and c4.* instance types.
