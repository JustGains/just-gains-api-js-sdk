
# Published Status

## Structure

`PublishedStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string \| undefined` | Optional | The unique code for the published status |
| `userRoleAccess` | `string \| undefined` | Optional | Comma-separated list of user roles that have access |
| `publishedStatusName` | `string \| undefined` | Optional | The name of the published status |

## Example (as JSON)

```json
{
  "publishedStatusCode": "PUBLISHED",
  "userRoleAccess": "ADMIN,USER",
  "publishedStatusName": "Published"
}
```

