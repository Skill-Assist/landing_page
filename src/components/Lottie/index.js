import { useLottie } from 'lottie-react';

import workingMan from '@public/working-tech.json';

const Lottie = () => {
  const options = {
    animationData: workingMan,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Lottie;
