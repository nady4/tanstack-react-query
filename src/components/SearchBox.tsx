interface SearchBoxProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
