import MySearchBar from "../atoms/MySearchBar";
import DeparmentList from "../../constants/deparment-list";

/**
 * Services component that renders a search bar for department listings.
 *
 * @returns {JSX.Element} The rendered Services component.
 */
const Service = () => {
  return <MySearchBar contentList={DeparmentList} />;
};
export default Service;
