import { Preview } from "./preview";
import { Uploader } from "./uploader";

import { Flex } from "@/components/flex";
import { RenderProps } from "@/components/form/imageUploader";

const UploaderUI = (props: RenderProps) => {
  const { files, handleClick, handleDeleteByIndex } = props;

  return (
    <Flex gap="1rem">
      <div
        style={{
          flexBasis: "76px",
        }}
      >
        <Uploader files={files} onClick={handleClick} />
      </div>
      <Flex gap="1rem">
        {files && <Preview files={files} onDelete={handleDeleteByIndex} />}
      </Flex>
    </Flex>
  );
};

export { UploaderUI };
