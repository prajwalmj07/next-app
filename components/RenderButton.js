import { useRecoilValue, useSetRecoilState } from "recoil";

const { dataPerPageState, shouldFetchDataState } = require("@/lib/atoms");

const RenderButton = () => {
    const setShouldFetchData = useSetRecoilState(shouldFetchDataState);
    const dataPerPage = useRecoilValue(dataPerPageState);
  
    const handleClick = () => {
      setShouldFetchData(true);
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Render ({dataPerPage} per page)
      </button>
    );
  };

  export default RenderButton;