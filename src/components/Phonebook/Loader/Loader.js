import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="118"
        width="118"
        radius="9"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
