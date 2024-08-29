
# Equipment Translations 400 Error

## Structure

`EquipmentTranslations400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "errors": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

