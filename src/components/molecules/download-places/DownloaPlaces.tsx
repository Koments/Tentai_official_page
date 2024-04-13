import {DownloadPlacesContainer, DownloadPlacesWrapper} from "./DownloadPlaces.module";
import {DownloadPlacesRight} from "./components/download-places-right/DownloadPlacesRight";
import {DownloadPlacesLeft} from "./components/download-places-left/DownloadPlacesLeft";
import {downloadPlacesLeftProps} from "../../../store/state/lang/type";

export const DownloadPlaces = ({upText, bottomText}:downloadPlacesLeftProps) => {
    return (
        <DownloadPlacesWrapper>
            <DownloadPlacesContainer>
                <DownloadPlacesLeft upText={upText} bottomText={bottomText} />
                <DownloadPlacesRight/>
            </DownloadPlacesContainer>
        </DownloadPlacesWrapper>
    );
};