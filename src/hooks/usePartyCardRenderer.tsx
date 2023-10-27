import { Link } from "react-router-dom";

import { PartyCard, PartyCardSkeleton } from "@/pages/components";
import { PartyInfo } from "@/services/internal/types";
import { calculateDday } from "@/utils/date";

const usePartyListRenderer = () => {
  const handleDday = (date: string) => {
    const [day] = date.split(" ");
    return calculateDday(day);
  };

  const renderPartyCardSkeletons = () =>
    Array(5)
      .fill(0)
      .map((_, index) => <PartyCardSkeleton key={index} />);

  const renderPartyList = (
    isLoading: boolean,
    partyData: PartyInfo[] | undefined,
  ) => {
    if (isLoading) return renderPartyCardSkeletons();

    if (partyData && partyData.length > 0) {
      return partyData.map(partyInfo => (
        <Link to={`/party-detail/${partyInfo.id}`} key={partyInfo.id}>
          <PartyCard
            title={partyInfo.title}
            date={partyInfo.partyDate}
            partyImage={partyInfo.thumbnail}
            dDay={handleDday(partyInfo.partyDate)}
            contributorsAvatars={partyInfo.joinUser.map(user => user.profile)}
          />
        </Link>
      ));
    } else {
      return "모임을 찾을 수 없습니다.";
    }
  };

  return renderPartyList;
};

export default usePartyListRenderer;
