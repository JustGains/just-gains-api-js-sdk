/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { CommonMediaAssetsController } from '../src';
import { testClient } from './testClient';
import { expectHeadersToMatch, makeApiCall } from './testHelper';

describe('CommonMediaAssetsController', () => {
  let controller : CommonMediaAssetsController;

  beforeAll(() => {
    controller = new CommonMediaAssetsController(testClient);
  });

  it('should Test getMediaAssets', async () => {
    const page = 1;

    const pageSize = 20;

    const response = await makeApiCall(
      () => controller.getMediaAssets(page, pageSize)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test Upload a new media asset', async () => {
    const mediaType = 'image/jpeg';

    const response = await makeApiCall(
      () => controller.uploadANewMediaAsset(
        undefined,
        mediaType,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(201);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test getMediaAsset', async () => {
    const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

    const response = await makeApiCall(
      () => controller.getMediaAsset(mediaAssetId)
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });

  it('should Test Delete a media asset', async () => {
    const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

    const response = await makeApiCall(
      () => controller.deleteAMediaAsset(mediaAssetId)
    );

    expect(response.statusCode).toBe(204);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);
  });
});
