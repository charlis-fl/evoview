import { ElementalProps } from './types';
import { ElementalStyled } from './Styled';

const Elemental = ({
  src,
  info,
  details,
  ottId,
  showDetails,
  ...props
} : ElementalProps) => {
  return (
    <ElementalStyled {...props} isSrc={src ? true : false} showDetails={showDetails}>
      {src && <img src={src} alt={info} />}
      <div className="content">
        <div className={`${src ? 'name' : 'name no-image'}`}>{info}</div>
        <div className="description" dangerouslySetInnerHTML={{ __html: details }}></div>
      </div>
    </ElementalStyled>
  );
};

export default Elemental;
