import { IconChevronLeftLarge, IconCancel } from "jjan-icon";
import { useNavigate } from "react-router-dom";

import { LabelCheckBox } from "../../components";

import { TAG_LIST, AGE_RANGE_LIST } from "./constants";
import { useFilterState, useQueryParamsBuilder } from "./hooks";
import { FilterState } from "./types";

import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { Header } from "@/components/header";
import { Hr } from "@/components/hr";
import { Layout } from "@/components/layout";
import { Selectionbox } from "@/components/selectionbox";
import { Slider } from "@/components/slider";
import { Spacing } from "@/components/spacing";
import { Stack } from "@/components/stack";
import { Typo } from "@/components/typo";

const Filter = () => {
  const navigate = useNavigate();
  const initialState: FilterState = {
    distance: 1,
    memberCnt: 1,
    selectedValuesTags: new Set(),
    selectedValuesAgeRange: new Set(),
    isCheckedRecent: true,
    isCheckedNear: false,
  };
  const { state, setState, handleToggle, handleSelectionboxChange } =
    useFilterState(initialState);

  const { buildQueryParams } = useQueryParamsBuilder(state);

  const navigateToPartyExploreWithQueryString = () => {
    const queryParams = buildQueryParams();
    navigate(`/party-explore?${queryParams.toString()}`);
  };

  return (
    <Layout
      header={
        <Header
          leftIcon={
            <IconChevronLeftLarge
              onClick={navigateToPartyExploreWithQueryString}
            />
          }
          rightIcon={<IconCancel onClick={() => navigate("/party-explore")} />}
        >
          필터
        </Header>
      }
    >
      <Box padding="0 20px">
        <Typo appearance="body1">정렬</Typo>
        <Spacing direction="vertical" size="10px" />
        <Stack space="space01">
          <LabelCheckBox
            label="최신순"
            id="1"
            isChecked={state.isCheckedRecent}
            onToggle={checked =>
              handleToggle("isCheckedRecent", "isCheckedNear", checked)
            }
          />
          <LabelCheckBox
            label="가까운 위치 순"
            id="2"
            isChecked={state.isCheckedNear}
            onToggle={checked =>
              handleToggle("isCheckedNear", "isCheckedRecent", checked)
            }
          />
        </Stack>
        <Spacing direction="vertical" size="10px" />
        <Hr type="dotted" />
        <Spacing direction="vertical" size="20px" />
        <Typo appearance="body1">어떤 술 모임에 가고 싶으세요?</Typo>
        <Spacing direction="vertical" size="20px" />
        <Selectionbox
          options={TAG_LIST}
          onChange={values =>
            handleSelectionboxChange("selectedValuesTags", values)
          }
        />
        <Spacing direction="vertical" size="20px" />
        <Stack space="space01">
          <Flex justifyContent="flex-start">
            <Typo appearance="body1">동네 반경 범위</Typo>
          </Flex>
          <Flex justifyContent="flex-end">
            <Typo appearance="body2">{state.distance} km</Typo>
          </Flex>
          <Slider
            min={1}
            max={10}
            step={1}
            value={state.distance}
            setValue={value => setState(prev => ({ ...prev, distance: value }))}
          />
        </Stack>
        <Spacing direction="vertical" size="30px" />
        <Stack space="space01">
          <Flex justifyContent="flex-start">
            <Typo appearance="body1">모임 인원을 선택해주세요.</Typo>
          </Flex>
          <Flex justifyContent="flex-end">
            <Typo appearance="body2">
              {`${state.memberCnt}~${state.memberCnt + 2}`} 명
            </Typo>
          </Flex>
          <Slider
            min={1}
            max={10}
            value={state.memberCnt}
            setValue={value =>
              setState(prev => ({ ...prev, memberCnt: value }))
            }
          />
        </Stack>
        <Spacing direction="vertical" size="30px" />
        <Typo appearance="body1">연령대</Typo>
        <Spacing direction="vertical" size="20px" />
        <Selectionbox
          options={AGE_RANGE_LIST}
          onChange={values =>
            handleSelectionboxChange("selectedValuesAgeRange", values)
          }
        />
      </Box>
    </Layout>
  );
};

export { Filter };
