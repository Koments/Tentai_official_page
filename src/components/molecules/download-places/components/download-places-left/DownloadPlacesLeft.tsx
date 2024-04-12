import {DownloadButton} from "../download-button/DownloadButton";
import {DownloadButtonWrapper, DownloadPlacesLeftContainer, DownloadPlacesLeftTitle} from "./DownloadPlacesLeft.module";
import {platforms} from "./data";
import {DownloadPlacesLeftProps} from "./types";

export const DownloadPlacesLeft = ({upText, bottomText}: DownloadPlacesLeftProps) => {
    return (
        <DownloadPlacesLeftContainer>
            <DownloadPlacesLeftTitle><span>{upText}</span> <br/> {bottomText}</DownloadPlacesLeftTitle>
            <DownloadButtonWrapper>
                {platforms.map(el => <DownloadButton key={el.id} title={el.title} platform={el.platform}
                                                     ImgComponent={el.ImgComponent}/>)}
            </DownloadButtonWrapper>
        </DownloadPlacesLeftContainer>
    );
};