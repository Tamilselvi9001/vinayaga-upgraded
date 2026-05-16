/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductSpecs {
  [key: string]: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  category: string;
  sku: string;
  grade: string;
  rating: number;
  description: string;
  image: string;
  highlights: string[];
  specs: ProductSpecs;
}
