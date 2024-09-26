
# Social Media Platform Update

## Structure

`SocialMediaPlatformUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Updated name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | Updated URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | Updated UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```

