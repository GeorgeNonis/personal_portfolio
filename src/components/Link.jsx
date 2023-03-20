const Link = ({ obj }) => {
  const { link, name, icon } = obj;

  return (
    <div className="grid grid-cols-2 gap-0.5 my-10 items-center">
      <img src={icon} alt={name} className="w-12 h-12" />
      <div>
        <a href={link} target="_blank">
          {name}
        </a>
      </div>
    </div>
  );
};
export default Link;
