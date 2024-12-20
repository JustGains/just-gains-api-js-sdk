
# Auth Initiate Response

## Structure

`AuthInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthStateData`](../../doc/models/o-auth-state-data.md) | Required | Data object containing OAuth state information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
    "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }
}
```

