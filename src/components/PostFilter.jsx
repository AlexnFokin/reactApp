import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <hr style={{margin: '15px auto'}} />
      <div>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue={'sort by'}
          options={[
            {value: 'title', name: 'by Title'},
            {value: 'body', name: 'by Body'}
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;