import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

export function SearchBar({search, setSearch, onSearch}) {
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(); 
    }
  }
  
  return (
    <div className="d-flex">
        <input onChange={(e) => setSearch(e.target.value)} onKeyUp={handleKeyPress.bind(this)} value={search} className="form-control rounded-start" type="text" placeholder='Search'/>
        <button onClick={onSearch} className="bi bi-search btn btn-primary"> <Icon path={mdiMagnify} size={1} /></button>
    </div>
  );
}