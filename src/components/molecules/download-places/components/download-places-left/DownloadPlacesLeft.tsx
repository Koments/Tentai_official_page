import {DownloadButton} from "../download-button/DownloadButton";
import {DownloadButtonWrapper, DownloadPlacesLeftContainer, DownloadPlacesLeftTitle} from "./DownloadPlacesLeft.module";
import {platforms} from "./data";
import {downloadPlacesLeftProps} from "../../../../../store/state/lang/type";

export const DownloadPlacesLeft = ({upText, bottomText}: downloadPlacesLeftProps) => {
    return (
        <DownloadPlacesLeftContainer>
            <DownloadPlacesLeftTitle><span>{upText}</span> {bottomText}</DownloadPlacesLeftTitle>
            <DownloadButtonWrapper>
                {platforms.map(el => <DownloadButton key={el.id} title={el.title} platform={el.platform}
                                                     ImgComponent={el.ImgComponent}/>)}
            </DownloadButtonWrapper>
        </DownloadPlacesLeftContainer>
    );
};