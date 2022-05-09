export interface HotelAttributes {
  name: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Hotel {
  id: number;
  attributes: HotelAttributes;
}
