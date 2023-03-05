import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MastheadProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};



const Masthead = ({ fields } : MastheadProps): JSX.Element => (
  <div className='title-wrapper'>
    <Text tag='h1' className="title-heading" field={fields?.heading} />
      <RichText className="title-copy" field={fields?.content} />
  </div>
);

export default withDatasourceCheck()<MastheadProps>(Masthead);
