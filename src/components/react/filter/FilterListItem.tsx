interface Props {
  title: string;
}

export const FilterListItem = ({ title }: Props) => {
  return (
    <li className="my-1">
      <input
        type="checkbox"
        alt={title}
        aria-label={title}
        id={title.toLowerCase()}
        className="cursor-pointer mr-1"
      />
      <label
        htmlFor={title.toLowerCase()}
        className="cursor-pointer text-xl font-medium text-accent"
      >
        {title}
      </label>
    </li>
  );
};
