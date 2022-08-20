import { ReactComponentElement, ReactElement } from 'react';

export interface _LayoutProps {
  childElement?: ReactElement;
  googleMapExtendsion?: ReactElement;
}

export interface PostItemModal {
  title: string;
  datePosted: Date;
  description: string;
  imageUrl: string;
}

export interface CarTypeItemModal {
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
}

export interface ServiceItemModal {
  title: string;
  imageUrl: string;
  redirectUrl: string;
}
