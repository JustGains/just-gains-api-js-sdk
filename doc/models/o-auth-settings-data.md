
# O Auth Settings Data

Data object containing OAuth provider settings

## Structure

`OAuthSettingsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | The OAuth client ID |
| `authorizeUrl` | `string` | Required | The authorization endpoint URL |
| `tokenUrl` | `string` | Required | The token endpoint URL |
| `scopes` | `string[]` | Required | Available OAuth scopes |

## Example (as JSON)

```json
{
  "clientId": "clientId2",
  "authorizeUrl": "authorizeUrl4",
  "tokenUrl": "tokenUrl8",
  "scopes": [
    "scopes4",
    "scopes5",
    "scopes6"
  ]
}
```

