
# Pagination

## Structure

`Pagination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentPage` | `number \| undefined` | Optional | The current page number |
| `totalPages` | `unknown \| undefined` | Optional | The total number of pages |
| `pageSize` | `number \| undefined` | Optional | The number of items per page |
| `totalCount` | `number \| undefined` | Optional | The total number of items across all pages |
| `hasPrevious` | `boolean \| undefined` | Optional | Indicates if there is a previous page |
| `hasNext` | `boolean \| undefined` | Optional | Indicates if there is a next page |

## Example (as JSON)

```json
{
  "currentPage": 1,
  "totalPages": {
    "key1": "val1",
    "key2": "val2"
  },
  "pageSize": 10,
  "totalCount": 75,
  "hasPrevious": false,
  "hasNext": true
}
```

