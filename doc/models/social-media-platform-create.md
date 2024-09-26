
# Social Media Platform Create

## Structure

`SocialMediaPlatformCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Required | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string` | Required | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string` | Required | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "INSTAGRAM",
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```

