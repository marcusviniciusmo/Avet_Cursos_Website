import { SweetAlertIcon } from "sweetalert2";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IAppointmentCard {
  imageUrl: string,
  imageDescription: string,
  label: string
}

export interface IArticle {
  id: number,
  content: IBlogArticle
};

export interface IAvetMap {
  mapId: string
  mapUrl: string
};

export interface IBlogArticle {
  imageUrl: string;
  imageDescription: string;
  articleTitle: string;
  articleText: string;
};

export interface ICarouselSlider {
  imageUrl: string,
  imageDescription: string,
  slideInterval: number
}

export interface IContactAreaHeader {
  areaTitle: string;
  areaText: string;
};

export interface IContactButton {
  label: string,
  IconUI: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; },
  className: string
};

export interface IContactFormFields {
  type?: string,
  name: string,
  id: string,
  maxLength: number,
  placeholder: string,
  cols?: number,
  rows?: number
};

export interface IContactForm {
  content: IContactFormFields[],
  submitButton: {
    label: string
  }
};

export interface IContactFormNotification {
  icon: SweetAlertIcon,
  message: string
};

export interface IContactInfo {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; },
  label1: string,
  label2?: string
};

export interface ICourseCard {
  imageUrl: string;
  imageDescription: string;
  courseTitle: string;
  durationInfoHeader?: string;
  durationInfoBody: string;
  periodInfoHeader: string;
  periodInfoBody: string;
  borderRight?: boolean;
};

export interface ICourseDuration {
  infoHeader?: string;
  infoBody: string;
};

export interface ICoursePeriod {
  infoHeader: string;
  infoBody: string;
};

export interface IFooter {
  copyrightSymbol: string,
  getYear: Function,
  text: string,
  iconFontAwesome: IconDefinition
};

export interface IHeader {
  imageUrl: string,
  imageDescription: string
}

export interface IIncludedInCourse {
  imageUrl: string;
  imageDescription: string;
  label: string;
};

export interface IMenu {
  to: string,
  className: string,
  content: IMenuItem
}

export interface IMenuItem {
  textButton: string;
  id: string;
};

export interface IPhotoGallery {
  id: string,
  imageUrl: string,
  imageDescription: string
}

export interface IServiceListing {
  id: string;
  serviceList: string;
};

export interface IUnderConstruction {
  pageTitle: string;
};