/**
 * NPM packages.
 */
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  const data  = props.data;
  const color = props.color;
  const unit  = props.unit;

  const template = (
    <div>
      <Sparklines
        height={30}
        width={60}
        data={data}>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {average(data)} {unit}
      </div>
    </div>
  );

  return template;
}

function average(data) {
  const sum     = _.sum(data);
  const amount  = data.length;

  const result      = {rounded: null, unrounded: null};
  result.unrounded  = (sum / amount);
  result.rounded    = _.round(result.unrounded);

  const average = result.rounded;
  return average;
}
