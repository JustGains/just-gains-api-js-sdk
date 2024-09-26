
# Custom Header Signature



Documentation for accessing and setting credentials for userRoles.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-User-Role | `string` | User role required for the operation | `xUserRole` |



**Note:** Auth credentials can be set using `userRolesCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  userRolesCredentials: {
    'X-User-Role': 'X-User-Role'
  },
});
```


