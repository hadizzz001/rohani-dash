import Select from 'react-dropdown-select';

export const CustomSelect = ({ options ,value,onChange }:any) => (
  <Select
  values={value}
  clearable
  searchable


  placeholder={'Select category'}
  required
  multi
    options={options}
    onChange={(values) => onChange(values)}
  />
);
