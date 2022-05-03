export interface IAppointmentCard {
  imageUrl: string,
  imageDescription: string,
  label: string
}

export interface IBlogArticle {
  imageUrl: string;
  imageDescription: string;
  articleTitle: string;
  articleText: string;
};

export interface IContactAreaHeader {
  areaTitle: string;
  areaText: string;
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

export interface IIncludedInCourse {
  imageUrl: string;
  imageDescription: string;
  label: string;
};

export interface IMenuItem {
  textButton: string;
  id: string;
};

export interface IServiceListing {
  id: string;
  serviceList: string;
};

export interface IUnderConstruction {
  pageTitle: string;
};