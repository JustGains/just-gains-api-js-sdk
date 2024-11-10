
# Social Media Platform

## Structure

`SocialMediaPlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string \| undefined` | Optional | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "TWITTER",
  "socialMediaPlatformName": "Twitter",
  "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
  "socialMediaPlatformIcon": {
    "mediaId": "000004fe-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 18,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```

