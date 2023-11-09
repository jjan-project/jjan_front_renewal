import { Dispatch, SetStateAction } from "react";

import { LocationItem } from "../item";

import { Box } from "@/components/box";
import { List } from "@/components/list";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useGetLocation } from "@/services/external/kakao";
import { PartyLocation } from "@/store/partyStore";

type LocationSearchProps = {
  onClose: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: Dispatch<SetStateAction<PartyLocation>> | any;
  location: PartyLocation | undefined;
  searchValue: string;
};

const LocationList = (props: LocationSearchProps) => {
  const {
    onClose: handleClose,
    onChange: handleLocationChange,
    searchValue,
  } = props;

  const {
    geoLocation: { latitude, longitude },
  } = useGeoLocation();

  const { data } = useGetLocation({
    x: latitude.toString(),
    y: longitude.toString(),
    radius: "10000",
    query: searchValue,
  });

  return (
    <Box height="74.5dvh">
      <List>
        {data?.documents.map(({ place_name, address_name, x, y }, index) => (
          <div
            key={index}
            onClick={() => {
              handleLocationChange({
                address: address_name,
                place: place_name,
                latitude: parseFloat(y),
                longitude: parseFloat(x),
              });
              handleClose(prev => !prev);
            }}
          >
            <LocationItem place={place_name} address={address_name} />
            <hr
              style={{
                marginTop: "0",
                paddingTop: "0",
                borderBottom: "1px solid #C4C4C4",
                width: "100%",
              }}
            />
          </div>
        ))}
      </List>
    </Box>
  );
};

export { LocationList };
