import {DownloadButtonContainer, ImgComponentContainer, Platform, Title,} from "./DownloadButton.module";
import {DownloadButtonProps} from "./types";

export const DownloadButton = ({title, platform, ImgComponent}: DownloadButtonProps) => {
    return (
        <DownloadButtonContainer>
            <ImgComponentContainer>
                <ImgComponent />
            </ImgComponentContainer>
            <div>
                <Title>{title}</Title>
                <Platform>{platform}</Platform>
            </div>
        </DownloadButtonContainer>
    );
};