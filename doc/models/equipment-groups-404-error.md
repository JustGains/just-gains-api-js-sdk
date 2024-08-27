
# Equipment Groups 404 Error

## Structure

`EquipmentGroups404Error`

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
  "message": "Equipment group not found",
  "errors": [
    "Equipment group with the specified code does not exist"
  ]
}
```

