
# Muscles 400 Error

## Structure

`Muscles400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |
| `error` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "status6",
  "message": "message4",
  "errors": [
    "errors9",
    "errors0"
  ],
  "error": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

