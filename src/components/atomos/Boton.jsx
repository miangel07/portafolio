import { Button } from '@nextui-org/react';

const MyButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MyButton;