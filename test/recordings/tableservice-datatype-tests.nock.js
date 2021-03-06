// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'tabledatatypetestdata0\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd052508a-0002-0043-5094-99ac2d000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'tabledatatypetestdata0\')',
  date: 'Wed, 26 Nov 2014 06:42:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/tabledatatypetestdata0', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'W/"datetime\'2014-11-26T06%3A42%3A40.6767617Z\'"',
  location: 'https://xplat.table.core.windows.net/tabledatatypetestdata0(PartitionKey=\'1\',RowKey=\'3\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '226d3f53-0002-0019-775c-dcf786000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/tabledatatypetestdata0(PartitionKey=\'1\',RowKey=\'3\')',
  date: 'Wed, 26 Nov 2014 06:42:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7b6693cc-0002-001e-1726-42deb0000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '50680ca7-0002-0044-6aa7-47d4ee000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:42 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6a50b40c-0002-0042-2809-a853c3000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:42 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b8998bd3-0002-0018-49a9-b3bc33000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:43 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e5a09fbc-0002-002a-2b9e-ad74f9000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:44 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c466b5f0-0002-0014-0c83-026787000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:44 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a6656608-0002-003a-01bd-75b47b000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:45 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7327f1cc-0002-0038-281e-2de7f4000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:46 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '900f33e2-0002-000e-75ba-9b481d000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:46 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ae9e76dd-0002-0034-6e01-001e93000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:47 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5165315e-0002-000a-0b38-ad1b1e000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:49 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '200cf4e0-0002-001c-2378-e356d3000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:49 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '46f3d123-0002-0006-7f0b-89a490000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:50 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '86ed205d-0002-0004-1be8-f9aebc000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:51 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c2cf55d0-0002-003e-010f-7227c9000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:51 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=Int64Value%20eq%204294967296L')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1ac774fc-0002-003c-0989-9b7ca9000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:52 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=Int64Value%20eq%204294967296L')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0796578e-0002-0011-6330-62df7f000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:53 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=GuidValue%20eq%20guid%27debc44d5-04a9-42ea-ab2f-4e2cb49ff833%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c7d3e775-0002-0037-73ba-1fde50000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:54 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=GuidValue%20eq%20guid%27debc44d5-04a9-42ea-ab2f-4e2cb49ff833%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd4f9dd84-0002-0049-64fb-dbde69000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:55 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=BinaryValue%20eq%20X%27010232%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1f7b8795-0002-000b-1e5d-017451000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:55 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/tabledatatypetestdata0?%24filter=BinaryValue%20eq%20X%27010232%27')
  .reply(200, "{\"odata.metadata\":\"https://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2014-11-26T06:42:40.6767617Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f9a347b6-0002-0031-80a7-6bf008000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:56 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables(%27tabledatatypetestdata0%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"https://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>https://xplat.table.core.windows.net/Tables('tabledatatypetestdata0')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('tabledatatypetestdata0')\" /><title /><updated>2014-11-26T06:42:57Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>tabledatatypetestdata0</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a7292620-0002-001b-082d-a87f9a000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27tabledatatypetestdata0%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1dd84d91-0002-002d-16d7-0121bf000000',
  'x-ms-version': '2014-02-14',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 26 Nov 2014 06:42:58 GMT' });
 return result; }]];