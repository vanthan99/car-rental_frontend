/**
 *
 * ProcedureItem
 *
 */
import { ProcedureItemModal } from 'app/models';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { styleVariables } from 'styles';

export function ProcedureItem(item: ProcedureItemModal) {
  const { imageUrl, redirectUrl, title } = item;
  return (
    <ProcedureItemWrapper>
      <LinkWrapper>
        <ImageWrapper to={redirectUrl}>
          <_Image src={imageUrl} />
        </ImageWrapper>
      </LinkWrapper>
      <h3
        style={{
          marginBottom: 0,
          fontSize: '1.75rem',
        }}
      >
        <_Link to={redirectUrl}>{title}</_Link>
      </h3>
    </ProcedureItemWrapper>
  );
}
const _Link = styled(Link)`
  -webkit-line-clamp: 1;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  transition: ${styleVariables.TRANSITION};

  &:hover {
    color: ${styleVariables.BACKGROUND_COLOR};
  }
`;

const _Image = styled.img`
  transition: ${styleVariables.TRANSITION} ease-out;
  transform: scale(1, 1);
  opacity: 1;
  width: 100% !important;
  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-style: none;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const ImageWrapper = styled(Link)`
  border-radius: 50%;
  overflow: hidden;
  display: block;
`;
const LinkWrapper = styled.p`
  display: inline-block;
  border-radius: 50%;
  border: 1px dashed #ff0;
  padding: 9px;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const ProcedureItemWrapper = styled.div`
  text-align: center;
`;
