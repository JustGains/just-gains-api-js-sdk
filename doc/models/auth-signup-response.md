
# Auth Signup Response

## Structure

`AuthSignupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data12 \| undefined`](../../doc/models/data-12.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "User registered successfully",
  "data": {
    "id": "00001c2a-0000-0000-0000-000000000000",
    "email": "email6",
    "userName": "userName2",
    "firstName": "firstName6",
    "lastName": "lastName4"
  }
}
```

