import type { IEmailFlowData, ISMSFlowData } from "@raskrask-dk/raskrask-utils";
import { RRDate } from "@raskrask-dk/raskrask-utils";

import type { ItemProps } from "../components/chemistry/molecules/item/props";
import type { NoteDataProps } from "../components/chemistry/molecules/note/props";
// import * as PagesProps from '../components/pages/props'
import type {
  BookingDataProps,
  BookingListDataProps,
  DeskBookingEditsRequestDTO,
  ServiceTypesDataProps,
} from "../components/pages/bookings/bookings.props";
import type {
  CompaniesDataProps,
  CompanyDataProps,
} from "../components/pages/companies/companies.props";
import type { EmployeeDataProps } from "../components/pages/company/company.props";
import type {
  CreditTransactionDataProps,
  CreditUsageDataProps,
} from "../components/pages/credit/credit.props";
import type { CreditDataProps } from "../components/pages/credits/credits.props";
import type { CustomerDataProps } from "../components/pages/customers/customers.props";
import type {
  EmailFooter,
  EmailHeader,
  EmailTexts,
  EmailTextsOrder,
  SmsTexts,
  SmsTextsOrder,
} from "../components/pages/messageeditor/messageeditor.props.";
import type {
  PartnerDataProps,
  PartnerWithInfoDataProps,
} from "../components/pages/partners/partners.props";
import {
  BookingByIdDTO,
  BookingTransactionDataProps,
} from "../components/pages/booking/booking.props";
import type * as DT from "./DTOs";
import {
  GetEmployeesByCompanyIdFilters,
  GetPartnersRepoFilters,
  IGetBookingsFilters,
  IGetCreditsRepoFilters,
  IRepository,
  UrlFilters,
} from "./IRepository";
import * as Mappers from "./Mappers";
import * as QB from "./QueryBuilders";
import { RRaxios } from "./axios";

export class ApiRepository implements IRepository {
  getServiceTypes = async (filters: {
    id?: number;
    serviceTypeName?: string;
    limit: number;
  }): Promise<ServiceTypesDataProps[]> => {
    const url = QB.getServiceTypesQueryBuilder(
      `/v1/desk/serviceTypes?limit=${filters.limit}`,
      filters
    );
    const response = await RRaxios(url);
    const serviceTypesData = (await response.data) as DT.DeskServiceTypeDTO[];
    return Mappers.mapGetServiceTypes(serviceTypesData);
  };
  getPricesByProfileId = async (filters: {
    profileId: number;
  }): Promise<DT.DeskPricesDTO[]> => {
    const url = `/v1/desk/partner/${filters.profileId}/prices`;
    const response = await RRaxios(url);
    const pricesData = (await response.data) as DT.DeskPricesDTO[];
    return Mappers.mapGetPricesByProfileId(pricesData);
  };

  getCustomers = async (filters: UrlFilters): Promise<CustomerDataProps[]> => {
    const url = QB.getCustomersQueryBuilder(
      `/v1/desk/customers?limit=${filters.limit}`,
      filters
    );
    const response = await RRaxios(url);
    const customersData = (await response.data) as DT.DeskCustomersDTO[];
    return Mappers.mapGetCustomers(customersData);
  };
  getCustomerById = async (id: number): Promise<CustomerDataProps> => {
    const response = await RRaxios(`/v1/desk/customer/${id}`);
    const customersData = (await response.data) as DT.DeskCustomersDTO[];
    return Mappers.mapGetCustomers(customersData)[0];
  };
  getBookings = async (
    filters: IGetBookingsFilters
  ): Promise<BookingListDataProps[]> => {
    let url = `/v1/desk/bookings?limit=${filters.limit}`;
    url = QB.getBookingsQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsListDTO[];
    return Mappers.mapGetBookingsList(bookingsData);
  };
  getBookingById = async (id: string): Promise<BookingDataProps> => {
    const url = `/v1/desk/booking/${id}`;
    const response = await RRaxios(url);
    if (response.status === 200) {
      const bookingsData = (await response.data) as BookingByIdDTO[];
      return Mappers.mapGetBookingById(bookingsData)[0];
    } else {
      throw new Error("Booking not found");
    }
  };
  updateBookingById = async (
    bookingId: string,
    edits: DeskBookingEditsRequestDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/booking/${bookingId}`;
    const response = await RRaxios.put(url, edits);
    if (response.status === 200) {
      return "Success";
    } else throw new Error("Booking not found");
  };
  getBookingsByProfileId = async (
    filters: IGetBookingsFilters & { profileId: number; limit: number }
  ): Promise<BookingListDataProps[]> => {
    let url = `/v1/desk/bookings?limit=${filters.limit}`;
    url = QB.getBookingsByProfileIdQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsListDTO[];
    return Mappers.mapGetBookingsList(bookingsData);
  };
  getBookingsByPartnerIDAndPeriod = async (
    profileId: number,
    serviceFrom?: RRDate,
    serviceTo?: RRDate
  ): Promise<BookingDataProps[]> => {
    const url = `/v1/desk/partner/${profileId}/bookings?serviceFrom=${serviceFrom?.toString(
      "yyyy-MM-dd"
    )}&serviceTo=${serviceTo?.toString("yyyy-MM-dd")}`;
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsDTO[];
    const partnerBookings = Mappers.mapGetBookings(bookingsData);
    return partnerBookings;
  };

  getBookingsByCompanyId = async (
    filters: IGetBookingsFilters & { companyId: number; limit: number }
  ): Promise<BookingListDataProps[]> => {
    // to be implemented
    let url = `/v1/desk/bookings?limit=${filters.limit}`;
    url += `&companyId=${filters.companyId}`;
    url = QB.getBookingsByCustomerIdQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsListDTO[];
    return Mappers.mapGetBookingsList(bookingsData);
  };

  getBookingsByCustomerId = async (
    filters: IGetBookingsFilters & { customerId: number; limit: number }
  ): Promise<BookingListDataProps[]> => {
    let url = `/v1/desk/bookings?limit=${filters.limit}`;
    url += `&customerId=${filters.customerId}`;
    url = QB.getBookingsByCustomerIdQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsListDTO[];
    return Mappers.mapGetBookingsList(bookingsData);
  };
  getBookingsByMotherbookingId = async (
    filters: IGetBookingsFilters & { motherBookingId: string; limit: number }
  ): Promise<(BookingListDataProps & { time: string })[]> => {
    let url = `/v1/desk/bookings?limit=${filters.limit}`;
    url = QB.getBookingsByMotherbookingIdQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const bookingsData = (await response.data) as DT.DeskBookingsListDTO[];
    return Mappers.mapGetBookingsListEmployeeBooking(bookingsData);
  };
  getCredits = async (
    filters: IGetCreditsRepoFilters
  ): Promise<CreditDataProps[]> => {
    let url = `/v1/desk/creditaccounts?limit=${filters.limit}`;
    url = QB.getCreditsQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const creditAccountsData =
      (await response.data) as DT.DeskCreditAccountsDTO[];
    return Mappers.mapGetCreditAccounts(creditAccountsData);
  };
  getCreditById = async (id: number): Promise<CreditDataProps> => {
    const url = `/v1/desk/creditaccount/${id}`;
    const response = await RRaxios(url);
    const creditAccountData = (await response.data) as DT.DeskCreditAccountsDTO;
    return Mappers.mapGetCreditAccounts([creditAccountData])[0];
  };
  getCreditsByPurchaserEmail = async (
    purchaserEmail: string
  ): Promise<CreditDataProps[]> => {
    const url = `/v1/desk/creditaccounts/purchased?purchaserEmail=${purchaserEmail}`;
    const response = await RRaxios(url);
    const creditAccountData = (await response.data) as DT.DeskCreditAccountsDTO;
    const creditAccountsOfCustomer = Mappers.mapGetCreditAccounts([
      creditAccountData,
    ]);
    return creditAccountsOfCustomer;
  };

  getPartners = async (
    filters: GetPartnersRepoFilters
  ): Promise<PartnerDataProps[]> => {
    let url = `/v1/desk/partners?limit=${filters.limit}`;
    url = QB.getPartnersQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const partnersData = (await response.data) as DT.DeskPartnersDTO2[];
    const res = Mappers.mapGetPartners(partnersData);
    return res;
  };
  getPartnerById = async (
    id: number,
    availabilitiesFrom?: RRDate,
    availabilitiesTo?: RRDate
  ): Promise<PartnerWithInfoDataProps> => {
    let url = `/v1/desk/partner/${id}`;

    if (availabilitiesFrom && availabilitiesTo) {
      url = `/v1/desk/partner/${id}?availabilitiesFrom=${availabilitiesFrom.toString(
        "yyyy-MM-dd"
      )}&availabilitiesTo=${availabilitiesTo.toString("yyyy-MM-dd")}`;
    }
    const response = await RRaxios(url);
    const partnersData = (await response.data) as DT.DeskPartnersDTO[];
    return Mappers.mapGetPartnersWithInfo(partnersData)[0];
  };
  getCompanies = async (filters: {
    id?: number;
    companyAddress?: string;
    companyEmailDomain?: string;
    companyName?: string;
    limit: number;
  }): Promise<CompaniesDataProps[]> => {
    let url = `/v1/desk/companies?limit=${filters.limit}`;
    url = QB.getCompaniesQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const companiesData = (await response.data) as DT.DeskCompaniesDTO[];
    return Mappers.mapGetCompanies(companiesData);
  };
  getCompanyById = async (id: number): Promise<CompanyDataProps> => {
    const url = `/v1/desk/company/${id}`;
    const response = await RRaxios(url);
    const companiesData = (await response.data) as DT.DeskCompanyDTO[];
    return Mappers.mapGetCompany(companiesData)[0];
  };
  getEmployeesByCompanyId = async (
    filters: GetEmployeesByCompanyIdFilters
  ): Promise<EmployeeDataProps[]> => {
    // to be implemented
    let url = `/v1/desk/customers?limit=${filters.limit}`;
    url = QB.getCustomersQueryBuilder(url, filters);
    const response = await RRaxios(url);
    const employeesData = (await response.data) as DT.DeskCustomersDTO[];
    return Mappers.mapGetEmployees(employeesData);
  };
  getCreditUsageByCreditId = async (filters: {
    id: number;
  }): Promise<CreditUsageDataProps[]> => {
    const url = `/v1/desk/creditaccount/${filters.id}/usage`;
    const response = await RRaxios(url);
    const usageData = (await response.data) as DT.DeskCreditAccountUsageDTO[];
    return Mappers.mapGetCreditUsage(usageData);
  };
  getCreditTransactionsByCreditId = async (filters: {
    id: number;
  }): Promise<CreditTransactionDataProps[]> => {
    const url = `/v1/desk/creditaccount/${filters.id}/transactions`;
    const response = await RRaxios(url);
    const transactionsData =
      (await response.data) as DT.DeskCreditTransactionDTO[];
    return Mappers.mapGetCreditAccountTransactions(transactionsData);
  };
  getBookingTransactionsByBookingId = async (filters: {
    id: string;
    limit: number;
  }): Promise<BookingTransactionDataProps[]> => {
    const url = `/v1/desk/booking/${filters.id}/transactions`;
    const response = await RRaxios(url);
    const transactionsData =
      (await response.data) as DT.DeskBookingTransactionsDTO[];
    return Mappers.mapGetBookingTransactions(filters.id, transactionsData);
  };
  getCustomerTimelinesByCustomerId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getPartnerTimelinesByPartnerId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  //used ?
  getCompanyTimelinesByCompanyId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getBookingTimelinesByBookingId = async (
    _id: string
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCreditTimelinesByCreditId = async (_id: number): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCustomerCommunicationsByCustomerId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getPartnerCommunicationsByPartnerId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCompanyCommunicationsByCompanyId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getBookingCommunicationsByBookingId = async (
    _id: string
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCreditCommunicationsByCreditId = async (
    _id: number
  ): Promise<ItemProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCustomerNotesByCustomerId = async (
    _id: number
  ): Promise<NoteDataProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCompanyNotesByCompanyId = async (
    _id: number
  ): Promise<NoteDataProps[]> => {
    throw new Error("Method not implemented.");
  };
  getPartnerNotesByPartnerId = async (
    _id: number
  ): Promise<NoteDataProps[]> => {
    throw new Error("Method not implemented.");
  };
  getBookingNotesByBookingId = async (
    _id: string
  ): Promise<NoteDataProps[]> => {
    throw new Error("Method not implemented.");
  };
  getCreditNotesByCreditId = async (_id: number): Promise<NoteDataProps[]> => {
    throw new Error("Method not implemented.");
  };
  putCustomerById = async (
    customer: DT.DeskCustomerPutDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/customer`;
    const response = await RRaxios.put(url, customer);
    const result = await response.data;
    return result.result;
  };

  putPartnerProfilTextById = async (
    partner: DT.DeskPartnerPutPartnerProfileTextDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/partner/profileText`;
    const response = await RRaxios.put(url, partner);
    const result = await response.data;
    return result.result;
  };

  putPartnerEducationTextById = async (
    partner: DT.DeskPartnerPutPartnerEducationTextDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/partner/educations`;
    const response = await RRaxios.put(url, partner);
    const result = await response.data;
    return result.result;
  };

  putPartnerInformationById = async (
    partner: DT.DeskPartnerPutPartnerInformationDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/partner`;
    const response = await RRaxios.put(url, partner);
    const result = await response.data;
    return result.result;
  };

  putPartnerSettingsById = async (
    partner: DT.DeskPartnerPutPartnerSettingsDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/partner/settings`;
    const response = await RRaxios.put(url, partner);
    const result = await response.data;
    return result.result;
  };

  putCompanyInformationById = async (
    company: DT.DeskCompanyPutCompanyInformationDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/company`;
    const response = await RRaxios.put(url, company);
    const result = await response.data;
    return result.result;
  };

  putEmployeeRoleById = async (
    employee: DT.DeskEmployeePutEmployeeRoleDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/company/employeerole`;
    const response = await RRaxios.put(url, employee);
    const result = await response.data;
    return result.result;
  };

  putPaymentNoteByDocumentId = async (data: {
    documentId: number;
    paymentNote: string;
  }): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/document/paymentnote`;
    const response = await RRaxios.put(url, data);
    const result = await response.data;
    return result.result;
  };

  putPaymentInfoByBookingId = async (
    data: DT.DeskBookingPutPaymentInfoDTO
  ): Promise<"Success" | "Error"> => {
    const url = `/v1/desk/document/paymentinfo`;
    const response = await RRaxios.put(url, data);
    return response.data.result;
  };

  getSmsTexts = async (): Promise<SmsTexts[]> => {
    const url = `/v1/desk/smstexts`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getSmsTextsOrder = async (): Promise<SmsTextsOrder[]> => {
    const url = `/v1/desk/smstextsorder`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getEmailTexts = async (): Promise<EmailTexts[]> => {
    const url = `/v1/desk/emailtexts`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getEmailTextsOrder = async (): Promise<EmailTextsOrder[]> => {
    const url = `/v1/desk/emailtextsorder`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getEmailFooters = async (): Promise<EmailFooter[]> => {
    const url = `/v1/desk/emailfooters`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getEmailHeaders = async (): Promise<EmailHeader[]> => {
    const url = `/v1/desk/emailheaders`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  postSmsChange = async (textId: number, text: string): Promise<void> => {
    const url = `/v1/desk/savesms`;
    const body = {
      textId,
      text,
    };
    await RRaxios.post(url, body);
  };

  postEmailChange = async (textId: number, text: string): Promise<void> => {
    const url = `/v1/desk/saveemail`;
    const body = {
      textId,
      text,
    };
    await RRaxios.put(url, body);
  };

  getDynamicEmailData = async (
    bookingId: string,
    emailStringIdentifier: string
  ): Promise<IEmailFlowData> => {
    const url = `/v1/desk/dynamicemaildata?bookingId=${bookingId}&emailString=${emailStringIdentifier}`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getDynamicSMSData = async (
    bookingId: string,
    smsStringIdentifier: string
  ): Promise<ISMSFlowData> => {
    const url = `/v1/desk/dynamicsmsdata?bookingId=${bookingId}&smsString=${smsStringIdentifier}`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  getAIPrompts = async (): Promise<DT.DeskAIPromptDTO[]> => {
    const url = `/v1/desk/aiprompts`;
    const response = await RRaxios(url);
    const result = await response.data;
    return result;
  };

  putAIPrompt = async (aiprompt: DT.DeskAIPromptDTO): Promise<void> => {
    const url = `/v1/desk/aiprompt`;
    const response = await RRaxios.put(url, aiprompt);
    const result = await response.data;
    return result;
  };
}
