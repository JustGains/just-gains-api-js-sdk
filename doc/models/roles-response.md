
# Roles Response

## Structure

`RolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role[]`](../../doc/models/role.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "roleId": 82,
      "roleName": "roleName4",
      "description": "description0"
    }
  ]
}
```

