import {DownloadPlacesContainer, DownloadPlacesWrapper} from "./DownloadPlaces.module";
import {DownloadPlacesRight} from "./components/download-places-right/DownloadPlacesRight";
import {DownloadPlacesLeft} from "./components/download-places-left/DownloadPlacesLeft";
import {DownloadPlacesLeftProps} from "./types";

export const DownloadPlaces = ({upText, bottomText}:DownloadPlacesLeftProps) => {
    return (
        <DownloadPlacesWrapper>
            <DownloadPlacesContainer>
                <DownloadPlacesLeft upText={upText} bottomText={bottomText} />
                <DownloadPlacesRight/>
            </DownloadPlacesContainer>
        </DownloadPlacesWrapper>
    );
};