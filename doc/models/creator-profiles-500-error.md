
# Creator Profiles 500 Error

## Structure

`CreatorProfiles500Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Internal Server Error",
  "message": "An unexpected error occurred",
  "errors": [
    "Internal server error"
  ]
}
```

