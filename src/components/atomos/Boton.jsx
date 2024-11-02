import { Button } from '@nextui-org/react';

const MyButton = ({ children,onClick, ...props }) => {
  return <Button onClick={onClick} {...props} >{children}</Button>;
};

export default MyButton;