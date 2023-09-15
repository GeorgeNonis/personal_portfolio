import type { IEmailFlowData, ISMSFlowData } from "@raskrask-dk/raskrask-utils";
import { RRDate } from "@raskrask-dk/raskrask-utils";
import { ItemProps } from "../components/chemistry/molecules/item/props";
import { NoteDataProps } from "../components/chemistry/molecules/note/props";
import {
  BookingDataProps,
  BookingListDataProps,
  DeskBookingEditsRequestDTO,
  ServiceTypesDataProps,
} from "../components/pages/bookings/bookings.props";
import {
  CompaniesDataProps,
  CompanyDataProps,
} from "../components/pages/companies/companies.props";
import { EmployeeDataProps } from "../components/pages/company/company.props";
import {
  CreditTransactionDataProps,
  CreditUsageDataProps,
} from "../components/pages/credit/credit.props";
import { CreditDataProps } from "../components/pages/credits/credits.props";
import { CustomerDataProps } from "../components/pages/customers/customers.props";
import {
  EmailFooter,
  EmailHeader,
  EmailTexts,
  EmailTextsOrder,
  SmsTexts,
  SmsTextsOrder,
} from "../components/pages/messageeditor/messageeditor.props.";
import {
  PartnerDataProps,
  PartnerWithInfoDataProps,
} from "../components/pages/partners/partners.props";
import {
  DeskAIPromptDTO,
  DeskBookingPutPaymentInfoDTO,
  DeskCompanyPutCompanyInformationDTO,
  DeskCustomerPutDTO,
  DeskEmployeePutEmployeeRoleDTO,
  DeskPartnerPutPartnerEducationTextDTO,
  DeskPartnerPutPartnerInformationDTO,
  DeskPartnerPutPartnerProfileTextDTO,
  DeskPartnerPutPartnerSettingsDTO,
  DeskPricesDTO,
} from "./DTOs";
import { BookingTransactionDataProps } from "../components/pages/booking/booking.props";

// const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

export interface GetCreditUsageRepoFilter {
  id: number;
}
export interface GetCreditTransactionsRepoFilter {
  id: number;
}

export interface IGetCreditsRepoFilters {
  id?: number;
  customerEmail?: string;
  creditCode?: string;
  creditAccountType?: string;
  createdDateFrom?: RRDate;
  createdDateTo?: RRDate;
  creditsLeft?: number;
  creditsBought?: number;
  limit: number;
}
export interface GetPartnersRepoFilters {
  id?: number;
  alias?: string;
  email?: string;
  isActive?: boolean;
  phoneNr?: string;
  speciality?: string;
  limit: number;
}

export interface GetCustomersRepoFilters {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNr?: string;
  companyId?: number;
  isEmployee?: boolean;
  role?: string;
  limit: number;
}

export type UrlFilters = {
  customerId?: number;
} & Omit<GetCustomersRepoFilters, "id">;

export interface GetEmployeesByCompanyIdFilters {
  id?: number;
  name?: string;
  phoneNr?: string;
  email?: string;
  role?: string;
  companyId: number;
  limit: number;
}

export interface IGetCompaniesRepoFilters {
  id?: number;
  companyAddress?: string;
  companyEmailDomain?: string;
  companyName?: string;
  limit: number;
}

export interface IGetBookingsFilters {
  serviceDateFrom?: RRDate;
  serviceDateTo?: RRDate;
  bookingId?: string;
  address?: string;
  isActive?: boolean;
  customerFullName?: string;
  alias?: string;
  serviceTypeName?: string;
  limit: number;
}

export interface IRepository {
  getServiceTypes: (filters: {
    id?: number;
    serviceTypeName?: string;
    limit: number;
  }) => Promise<ServiceTypesDataProps[]>;
  getPricesByProfileId: (filters: {
    profileId: number;
  }) => Promise<DeskPricesDTO[]>;

  // Customers
  getCustomers: (
    filters: GetCustomersRepoFilters
  ) => Promise<CustomerDataProps[]>;
  getCustomerById: (id: number) => Promise<CustomerDataProps>;
  putCustomerById: (
    customer: DeskCustomerPutDTO
  ) => Promise<"Success" | "Error">;

  // Bookings
  getBookings: (
    filters: IGetBookingsFilters
  ) => Promise<BookingListDataProps[]>;
  getBookingById: (id: string) => Promise<BookingDataProps>;
  updateBookingById: (
    bookingId: string,
    edits: DeskBookingEditsRequestDTO
  ) => Promise<"Success" | "Error">;

  getBookingsByProfileId: (
    filters: IGetBookingsFilters & { profileId: number; limit: number }
  ) => Promise<BookingListDataProps[]>;
  getBookingsByPartnerIDAndPeriod: (
    id: number,
    serviceFrom?: RRDate,
    serviceTo?: RRDate
  ) => Promise<BookingDataProps[]>;
  getBookingsByCompanyId: (
    filters: IGetBookingsFilters & { companyId: number; limit: number }
  ) => Promise<BookingListDataProps[]>;
  getBookingsByCustomerId: (
    filters: IGetBookingsFilters & { customerId: number; limit: number }
  ) => Promise<BookingListDataProps[]>;
  getBookingsByMotherbookingId: (
    filters: IGetBookingsFilters & { motherBookingId: string; limit: number }
  ) => Promise<(BookingListDataProps & { time: string })[]>;
  getBookingTransactionsByBookingId(filters: {
    id: string;
    limit: number;
  }): Promise<BookingTransactionDataProps[]>;
  putPaymentInfoByBookingId: (
    paymentInfo: DeskBookingPutPaymentInfoDTO
  ) => Promise<"Success" | "Error">;

  // Credits
  getCredits: (filters: IGetCreditsRepoFilters) => Promise<CreditDataProps[]>;
  getCreditById: (id: number) => Promise<CreditDataProps>;
  getCreditsByPurchaserEmail: (
    purchaserEmail: string
  ) => Promise<CreditDataProps[]>;
  getCreditUsageByCreditId: (
    filters: GetCreditUsageRepoFilter
  ) => Promise<CreditUsageDataProps[]>;

  // Partners
  getPartners: (filters: GetPartnersRepoFilters) => Promise<PartnerDataProps[]>;
  getPartnerById: (
    id: number,
    availabilitiesFrom?: RRDate,
    availabilitiesTo?: RRDate
  ) => Promise<PartnerWithInfoDataProps>;
  putPartnerProfilTextById: (
    partner: DeskPartnerPutPartnerProfileTextDTO
  ) => Promise<"Success" | "Error">;
  putPartnerInformationById: (
    partner: DeskPartnerPutPartnerInformationDTO
  ) => Promise<"Success" | "Error">;
  putPartnerSettingsById: (
    partner: DeskPartnerPutPartnerSettingsDTO
  ) => Promise<"Success" | "Error">;
  putPartnerEducationTextById: (
    partner: DeskPartnerPutPartnerEducationTextDTO
  ) => Promise<"Success" | "Error">;

  // Companies
  getCompanies: (
    filters: IGetCompaniesRepoFilters
  ) => Promise<CompaniesDataProps[]>;
  getCompanyById: (id: number) => Promise<CompanyDataProps>;
  getEmployeesByCompanyId: (
    filters: GetEmployeesByCompanyIdFilters
  ) => Promise<EmployeeDataProps[]>;

  putCompanyInformationById: (
    company: DeskCompanyPutCompanyInformationDTO
  ) => Promise<"Success" | "Error">;
  putEmployeeRoleById: (
    employee: DeskEmployeePutEmployeeRoleDTO
  ) => Promise<"Success" | "Error">;

  getCreditTransactionsByCreditId: (
    filters: GetCreditTransactionsRepoFilter
  ) => Promise<CreditTransactionDataProps[]>;
  putPaymentNoteByDocumentId: (data: {
    documentId: number;
    paymentNote: string;
  }) => Promise<"Success" | "Error">;

  // Timeline
  getCustomerTimelinesByCustomerId(id: number): Promise<ItemProps[]>;
  getPartnerTimelinesByPartnerId(id: number): Promise<ItemProps[]>;
  getCompanyTimelinesByCompanyId(id: number): Promise<ItemProps[]>;
  getBookingTimelinesByBookingId(id: string): Promise<ItemProps[]>;
  getCreditTimelinesByCreditId(id: number): Promise<ItemProps[]>;

  // Communications
  getCustomerCommunicationsByCustomerId(id: number): Promise<ItemProps[]>;
  getPartnerCommunicationsByPartnerId(id: number): Promise<ItemProps[]>;
  getCompanyCommunicationsByCompanyId(id: number): Promise<ItemProps[]>;
  getBookingCommunicationsByBookingId(id: string): Promise<ItemProps[]>;
  getCreditCommunicationsByCreditId(id: number): Promise<ItemProps[]>;

  // Notes
  getCustomerNotesByCustomerId: (id: number) => Promise<NoteDataProps[]>;
  getCompanyNotesByCompanyId(id: number): Promise<NoteDataProps[]>;
  getPartnerNotesByPartnerId(id: number): Promise<NoteDataProps[]>;
  getBookingNotesByBookingId(id: string): Promise<NoteDataProps[]>;
  getCreditNotesByCreditId(id: number): Promise<NoteDataProps[]>;

  // Messages
  getSmsTexts: () => Promise<SmsTexts[]>;
  getSmsTextsOrder: () => Promise<SmsTextsOrder[]>;
  getEmailTexts: () => Promise<EmailTexts[]>;
  getEmailTextsOrder: () => Promise<EmailTextsOrder[]>;
  getEmailFooters: () => Promise<EmailFooter[]>;
  getEmailHeaders: () => Promise<EmailHeader[]>;
  postSmsChange: (textId: number, text: string) => void;
  postEmailChange: (textId: number, text: string) => void;
  getDynamicEmailData: (
    bookingId: string,
    emailStringIdentifier: string
  ) => Promise<IEmailFlowData>; // TODO
  getDynamicSMSData: (
    bookingId: string,
    smsStringIdentifier: string
  ) => Promise<ISMSFlowData>; // TODO

  // AI Prompts
  putAIPrompt: (aiprompt: DeskAIPromptDTO) => Promise<void>;
  getAIPrompts: () => Promise<DeskAIPromptDTO[]>;
  // Tests
}
