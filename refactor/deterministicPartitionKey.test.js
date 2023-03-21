const { deterministicPartitionKey } = require('./deterministicPartitionKey ');
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
  test('returns trivial partition key when event is null', () => {
    expect(deterministicPartitionKey(null)).toBe('0');
  });

  test('returns event.partitionKey when present', () => {
    const event = { partitionKey: 'my-partition-key' };
    expect(deterministicPartitionKey(event)).toBe('my-partition-key');
  });

  test('generates partition key by hashing event data when event.partitionKey is not present', () => {
    const event = { data: { name: 'John', age: 30 } };
    const data = JSON.stringify(event);
    const expectedPartitionKey = crypto.createHash('sha3-512').update(data).digest('hex');
    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });

  test('truncates partition key when length exceeds MAX_PARTITION_KEY_LENGTH', () => {
    const longKey = 'a'.repeat(300);
    const expectedPartitionKey = crypto.createHash('sha3-512').update(longKey).digest('hex');
    expect(deterministicPartitionKey({ partitionKey: longKey })).toBe(expectedPartitionKey);
  });
});
