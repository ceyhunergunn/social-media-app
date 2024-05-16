import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostLists from "./GridPostLists";

type SearchResultProps = {
  isStartFetching: boolean;
  searchedPosts: Models.Document[];
};
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostLists posts={searchedPosts.documents} />;
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No Results Found</p>
  );
};

export default SearchResults;
