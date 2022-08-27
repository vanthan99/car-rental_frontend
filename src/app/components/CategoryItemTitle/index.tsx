/**
 *
 * CategoryItemTitle
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
interface CategoryItemTitleModal {
  title: string;
  description: string;
  textColorDark?: boolean;
  iconColorDark?: boolean;
}
export const CategoryItemTitle = (item: CategoryItemTitleModal) => {
  const { description, title, iconColorDark, textColorDark } = item;
  const Title = styled.p`
    text-align: center;
    font-size: 30px;
    color: ${textColorDark ? '#010101' : '#fff'};
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 0;
  `;
  const Description = styled.p`
    text-align: center;
    color: ${textColorDark ? '#333333' : '#fff'};
    font-weight: 400;
    background-image: url(${iconColorDark
      ? 'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/bg-title-1.png?alt=media&token=4f03492d-0308-4079-b967-62079b946d2d'
      : 'https://firebasestorage.googleapis.com/v0/b/carrental-e6f92.appspot.com/o/bg-title.png?alt=media&token=ae9b1d09-ac92-493d-811c-aa589fa95888'});

    background-repeat: no-repeat;
    background-position: bottom center;
    padding-bottom: 20px;
    margin-bottom: 1.5rem;
    margin-top: 0;
  `;
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};
