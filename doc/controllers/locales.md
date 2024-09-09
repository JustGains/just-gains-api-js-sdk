# Locales

```ts
const localesController = new LocalesController(client);
```

## Class Name

`LocalesController`

## Methods

* [Get Locales](../../doc/controllers/locales.md#get-locales)
* [Create a New Locale](../../doc/controllers/locales.md#create-a-new-locale)
* [Get Locale](../../doc/controllers/locales.md#get-locale)
* [Update a Locale](../../doc/controllers/locales.md#update-a-locale)
* [Delete a Locale](../../doc/controllers/locales.md#delete-a-locale)


# Get Locales

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocales(  showAll: boolean,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `showAll` | `boolean` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleListResponse`](../../doc/models/locale-list-response.md)

## Example Usage

```ts
const showAll = false;

try {
  const { result, ...httpResponse } = await localesController.getLocales(showAll);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Locale

```ts
async createANewLocale(  body: Locale,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Locale`](../../doc/models/locale.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: Locale = {
  localeCode: 'en-US',
  localeName: 'English (United States)',
  published: true,
};

try {
  const { result, ...httpResponse } = await localesController.createANewLocale(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Locale

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to retrieve.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleResponse`](../../doc/models/locale-response.md)

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await localesController.getLocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Locale

```ts
async updateALocale(  body: Locale,
  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Locale`](../../doc/models/locale.md) | Body, Required | - |
| `localeCode` | `string` | Template, Required | The locale code to update.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: Locale = {
  localeCode: 'en-US',
  localeName: 'English (United States)',
  published: true,
};

const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await localesController.updateALocale(
  body,
  localeCode
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Locale

```ts
async deleteALocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to delete.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await localesController.deleteALocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

