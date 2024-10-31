
# Auth Settings Response

## Structure

`AuthSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`OAuthSettingsData \| undefined`](../../doc/models/o-auth-settings-data.md) | Optional | Data object containing OAuth provider settings |
| `status` | `unknown \| undefined` | Optional | - |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": {
    "key1": "val1",
    "key2": "val2"
  },
  "message": {
    "key1": "val1",
    "key2": "val2"
  },
  "data": {
    "clientId": "clientId4",
    "authorizeUrl": "authorizeUrl6",
    "tokenUrl": "tokenUrl0",
    "scopes": [
      "scopes6",
      "scopes5"
    ]
  }
}
```

