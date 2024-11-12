interface Props {
  title: string;
  changeTagsQuery: (tag: string) => void;
}

export const FilterListItem = ({ title, changeTagsQuery }: Props) => {
  return (
    <li className="my-1">
      <input
        type="checkbox"
        alt={title}
        aria-label={title}
        id={title.toLowerCase()}
        className="cursor-pointer mr-1"
        onChange={() => changeTagsQuery(title.toLowerCase().trim())}
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
