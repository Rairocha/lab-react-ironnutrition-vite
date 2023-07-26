import { Divider, Input } from 'antd';

const Search = ({ setSearchInput }) => {

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

  return (
    <div  >
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleChange} />
    </div>
  );
}

export default Search;