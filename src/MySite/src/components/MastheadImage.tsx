import { Text, RichText, Field, withDatasourceCheck, LinkField, Link, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MastheadImageProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
    ctaLink?: LinkField;
    image: ImageField;
  };
};


const MastheadImage = ({ fields } : MastheadImageProps): JSX.Element => (
  <section className='person__section'>
     <div className="person__image">
        <Image field={{ value: { src: fields.image.value?.src } }} />
    </div>
    <div className='person__description'>
        <Text tag='h2' className='description-title' field={fields?.heading} />
        <RichText className='description-content'  field={fields?.content} />
        {fields.ctaLink ? <Link field={fields.ctaLink} className='person__link'/> : <></>}
    </div>
  </section>
);

export default withDatasourceCheck()<MastheadImageProps>(MastheadImage);
