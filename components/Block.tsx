import { HTMLAttributes, ReactNode, ReactText } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
}

const Block = ({ children, noBorder = false }: BlockProps) => {
  return (
    <section
      className={`flex justify-center border-black dark:border-white ${
        noBorder ? '' : 'border-t'
      }`}
    >
      <div className="w-full max-w-7xl">{children}</div>
    </section>
  );
};

export default Block;
