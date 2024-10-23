interface SearchBoxProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="flex justify-center">
      <input
        className="text-center font-mono border-2 w-64 mb-4 rounded-lg"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
