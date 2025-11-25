import { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoryBar from "../components/StoryBar";

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
    setLoading(false);
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/** stories and post list */}
      <div>
        <StoryBar />
        <div className="p-4 space-y-6">list of post</div>
      </div>

      {/** Right side bar */}

      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Feed;
