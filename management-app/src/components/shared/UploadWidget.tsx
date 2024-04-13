import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: import.meta.env.VITE_SCALE_BYTE_API_KEY ?? "", // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: false, maxFileCount: 1 };

const UploadWidget = ({ onComplete, btnText }: {onComplete: (urls: string[]) => void, btnText: string}) => {
  return (
    <div className="border">
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={(files) => {
            onComplete(files.map((x) => x.fileUrl))
        }}
      >
        {({ onClick }) => <button onClick={onClick}>{btnText}</button>}
      </UploadButton>
    </div>
  );
};

export default UploadWidget;
