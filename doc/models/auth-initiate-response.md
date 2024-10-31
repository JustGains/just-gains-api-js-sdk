
# Auth Initiate Response

## Structure

`AuthInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`OAuthStateData \| undefined`](../../doc/models/o-auth-state-data.md) | Optional | Data object containing OAuth state information |
| `message` | `unknown \| undefined` | Optional | - |
| `status` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": {
    "key1": "val1",
    "key2": "val2"
  },
  "status": {
    "key1": "val1",
    "key2": "val2"
  },
  "data": {
    "uri": "uri4",
    "pkceVerifier": "pkceVerifier2"
  }
}
```

