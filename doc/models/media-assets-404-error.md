
# Media Assets 404 Error

## Structure

`MediaAssets404Error`

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
  "message": "Media asset not found",
  "errors": [
    "The requested media asset could not be found"
  ]
}
```

