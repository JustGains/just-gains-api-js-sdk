
# Equipment 409 Error

## Structure

`Equipment409Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Unknown Status",
  "message": "Equipment code conflict",
  "errors": [
    "Equipment code already exists for a different equipment"
  ]
}
```

