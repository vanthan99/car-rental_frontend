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
