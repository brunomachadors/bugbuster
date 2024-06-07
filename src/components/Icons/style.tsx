interface MaterialIconProps {
  iconName: string;
  size?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  iconName,
  size,
}) => {
  const iconStyle = {
    fontSize: size || 'inherit',
  };

  return (
    <span className="material-icons" style={iconStyle}>
      {iconName}
    </span>
  );
};
