import { CirclesWithBar } from 'react-loader-spinner';
import { Loader } from './LoaderStyled';

export const LoaderSpiner = () => {
  return (
    <Loader>
         <CirclesWithBar color='blue' />
    </Loader>
   
  );
};