
# Locale

## Structure

`Locale`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | A unique code for the locale. |
| `localeName` | `string \| undefined` | Optional | The name of the locale. |
| `published` | `boolean \| undefined` | Optional | Indicates whether the locale is published. |
| `localeIcon` | [`LocaleIcon \| undefined`](../../doc/models/locale-icon.md) | Optional | The icon associated with this locale. |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "localeName": "English (United States)",
  "published": true,
  "localeIcon": {
    "mediaId": "00000dd0-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 20,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```

