import './Box.css';

export const Box = ({ children, rest }: any) => (
  <div className="box" {...rest}>
    {children}
  </div>
);
