import { IMAGE_BUCKET_BASE_URL, type ImageRef } from '../consts';

// This is for the xer-sites-assets bucket
export function getBucketImageUrl(image: ImageRef) {
	return new URL(`${image.folder}/${image.fileName}`, `${IMAGE_BUCKET_BASE_URL}/`).toString();
}
