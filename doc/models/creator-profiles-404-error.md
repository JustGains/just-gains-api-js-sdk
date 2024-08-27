
# Creator Profiles 404 Error

## Structure

`CreatorProfiles404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Not Found",
  "message": "Creator profile not found",
  "errors": [
    "The requested creator profile does not exist"
  ]
}
```

