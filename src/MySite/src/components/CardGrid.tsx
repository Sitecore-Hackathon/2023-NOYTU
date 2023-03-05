import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Icon } from "assets/svg/icons";


type CardGridProps = ComponentProps & {
  fields: {
    copyGraph: Field<string>;
    copyUI: Field<string>;
    copyApps: Field<string>;
    copyPhoto: Field<string>;
    copyIllustration: Field<string>;
    copyMotion: Field<string>;
  };
};



const CardGrid = ({ fields } : CardGridProps): JSX.Element => (
  <section className="grid-container">
      <div className="card-grid card-grid__graphicdesign">
        <span className="card-grid__icon">
          <Icon.graphicDesign />
        </span>
            <Text tag='span' className="card-grid__text" field={fields?.copyGraph} />
      </div>
      <div className="card-grid card-grid__uiux">
        <span className="card-grid__icon">
          <Icon.uiUx />
        </span>
            <Text tag='span' className="card-grid__text" field={fields?.copyUI} />
      </div>
      <div className="card-grid card-grid__apps">
        <span className="card-grid__icon">
          <Icon.apps />
        </span>
            <Text tag='span' className="card-grid__text" field={fields?.copyApps} />
      </div>
      <div className="card-grid card-grid__photography">
        <span className="card-grid__icon">
          <Icon.photography />
        </span>
            <Text tag='span' className="card-grid__text" field={fields?.copyPhoto} />
      </div>
      <div className="card-grid card-grid__illustrations">
        <span className="card-grid__icon">
          <Icon.illustration />
        </span>
            <Text tag='span' className="card-grid__text" field={fields?.copyIllustration} />
      </div>
      <div className="card-grid card-grid__motiongraphic">
        <span className="card-grid__icon">
          <Icon.motionGraphics />
        </span>
        <Text tag='span' className="card-grid__text" field={fields?.copyMotion} />
      </div>
    </section>  
);

export default withDatasourceCheck()<CardGridProps>(CardGrid);
