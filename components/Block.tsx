import { HTMLAttributes, ReactNode, ReactText } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  noBorder?: boolean;
}

const Block = ({ children, noBorder = false }: BlockProps) => {
  return (
    <section
      className={`flex relative justify-center border-black dark:border-white ${
        noBorder ? '' : 'border-t'
      }`}
    >
      <div className={`w-full border-black dark:border-white max-w-7xl`}>
        {children}
      </div>
    </section>
  );
};

export default Block;
