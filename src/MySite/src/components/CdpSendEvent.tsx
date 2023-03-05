import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Script from 'next/script';

interface Fields {
  Type: Field<string>;
  Channel: Field<string>;
  Language: Field<string>;
  Currency: Field<string>;
  ExtraProperties: Field<string>;
}

export type CDPSendEventProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CDPSendEventProps): JSX.Element => {
  type ObjectType = { [key: string]: any };
  let data: ObjectType = {
    type: props.fields?.Type?.value || 'VIEW',
    channel: props.fields?.Channel?.value || 'WEB',
    language: props.fields?.Language?.value || 'EN',
    currency: props.fields?.Currency?.value || 'USD',
  };
  if (props.fields?.ExtraProperties?.value) {
    let extraData = JSON.parse(props.fields?.ExtraProperties?.value);
    if (extraData) {
      extraData.forEach((item: any) => {
        data[item.key] = item.value;
      });
    }
  }
  let strData = JSON.stringify(data);
  return (
    <Script id="cdpSendEventId" type="module" src="./helpers/CdpSendEvent.js" cdp-data={strData} />
  );
};
