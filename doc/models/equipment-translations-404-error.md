
# Equipment Translations 404 Error

## Structure

`EquipmentTranslations404Error`

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
  "message": "Equipment not found",
  "errors": [
    "Equipment with the specified code does not exist"
  ]
}
```

