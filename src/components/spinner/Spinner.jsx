import { ColorRing } from 'react-loader-spinner';
import { DisplayFlex } from './SpinnerStyled.styled';

const Spinner = () => {
  return (
    <DisplayFlex>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </DisplayFlex>
  );
};

export default Spinner;
