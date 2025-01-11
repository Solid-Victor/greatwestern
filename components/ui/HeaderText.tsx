interface HeaderTextProps {
  title: string;
  highlight?: string;
  className?: string;
}

const HeaderText = ({ title, highlight, className = "" }: HeaderTextProps) => {
  return (
    <h2 className={`text-4xl font-bold text-center mb-8 ${className}`}>
      {title} {highlight && <span className="text-yellow-500">{highlight}</span>}
    </h2>
  );
};

export default HeaderText; 