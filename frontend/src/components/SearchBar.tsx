import { useSetRecoilState } from 'recoil';
import searchIcon from '../assets/searchIcon.svg'
import filterChar from '../store/filterChar';



export const SearchBar = () => {
    const setFilterChar = useSetRecoilState(filterChar);
    return (
        <div className="w-100 relative">
            <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
                type="text"
                placeholder="Search posts..."
                onChange={(e) => {
                    setFilterChar(e.target.value);
                  }}
                className="text-xs sm:text-lg pl-10 pr-4 py-1 sm:py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}