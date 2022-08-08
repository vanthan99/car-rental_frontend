/**
 *
 * GoogleMapExtenstion
 *
 */
import * as React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {}

export function GoogleMapExtenstion(props: Props) {
  const history = useHistory();
  const test = () => history.push('/');
  return (
    <div>
      <button onClick={test}>Go to Home</button> this is google maps
    </div>
  );
}
