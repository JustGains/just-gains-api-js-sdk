
# Programs Reviews 404 Error

## Structure

`ProgramsReviews404Error`

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
  "message": "Program not found",
  "errors": [
    "Program with the specified ID does not exist"
  ]
}
```

