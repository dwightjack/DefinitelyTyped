// Type definitions for non-npm package Google DoubleClick Bid Manager API v1 1.0
// Project: https://developers.google.com/bid-manager/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/doubleclickbidmanager/v1/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load DoubleClick Bid Manager API v1 */
    function load(name: "doubleclickbidmanager", version: "v1"): PromiseLike<void>;
    function load(name: "doubleclickbidmanager", version: "v1", callback: () => any): void;

    const lineitems: doubleclickbidmanager.LineitemsResource;

    const queries: doubleclickbidmanager.QueriesResource;

    const reports: doubleclickbidmanager.ReportsResource;

    const sdf: doubleclickbidmanager.SdfResource;

    namespace doubleclickbidmanager {
        interface DownloadLineItemsRequest {
            /** File specification (column names, types, order) in which the line items will be returned. Default to EWF. */
            fileSpec?: string;
            /** Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned. */
            filterIds?: string[];
            /** Filter type used to filter line items to fetch. */
            filterType?: string;
            /** Format in which the line items will be returned. Default to CSV. */
            format?: string;
        }
        interface DownloadLineItemsResponse {
            /** Retrieved line items in CSV format. For more information about file formats, see  Entity Write File Format. */
            lineItems?: string;
        }
        interface DownloadRequest {
            /** File types that will be returned. */
            fileTypes?: string[];
            /**
             * The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified. Only one ID is allowed for the
             * ADVERTISER_ID filter type. For INSERTION_ORDER_ID or LINE_ITEM_ID filter types, all IDs must be from the same Advertiser.
             */
            filterIds?: string[];
            /** Filter type used to filter line items to fetch. */
            filterType?: string;
            /** SDF Version (column names, types, order) in which the entities will be returned. Default to 3. */
            version?: string;
        }
        interface DownloadResponse {
            /** Retrieved ad groups in SDF format. */
            adGroups?: string;
            /** Retrieved ads in SDF format. */
            ads?: string;
            /** Retrieved insertion orders in SDF format. */
            insertionOrders?: string;
            /** Retrieved line items in SDF format. */
            lineItems?: string;
        }
        interface FilterPair {
            /** Filter type. */
            type?: string;
            /** Filter value. */
            value?: string;
        }
        interface ListQueriesResponse {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse". */
            kind?: string;
            /** Retrieved queries. */
            queries?: Query[];
        }
        interface ListReportsResponse {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse". */
            kind?: string;
            /** Retrieved reports. */
            reports?: Report[];
        }
        interface Parameters {
            /** Filters used to match traffic data in your report. */
            filters?: FilterPair[];
            /** Data is grouped by the filters listed in this field. */
            groupBys?: string[];
            /** Whether to include data from Invite Media. */
            includeInviteData?: boolean;
            /** Metrics to include as columns in your report. */
            metrics?: string[];
            /** Report type. */
            type?: string;
        }
        interface Query {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query". */
            kind?: string;
            /** Query metadata. */
            metadata?: QueryMetadata;
            /** Query parameters. */
            params?: Parameters;
            /** Query ID. */
            queryId?: string;
            /**
             * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored
             * otherwise.
             */
            reportDataEndTimeMs?: string;
            /**
             * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored
             * otherwise.
             */
            reportDataStartTimeMs?: string;
            /** Information on how often and when to run a query. */
            schedule?: QuerySchedule;
            /** Canonical timezone code for report data time. Defaults to America/New_York. */
            timezoneCode?: string;
        }
        interface QueryMetadata {
            /** Range of report data. */
            dataRange?: string;
            /** Format of the generated report. */
            format?: string;
            /** The path to the location in Google Cloud Storage where the latest report is stored. */
            googleCloudStoragePathForLatestReport?: string;
            /** The path in Google Drive for the latest report. */
            googleDrivePathForLatestReport?: string;
            /** The time when the latest report started to run. */
            latestReportRunTimeMs?: string;
            /**
             * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR
             * BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE
             *
             * An locale string not in the list above will generate reports in English.
             */
            locale?: string;
            /** Number of reports that have been generated for the query. */
            reportCount?: number;
            /** Whether the latest report is currently running. */
            running?: boolean;
            /** Whether to send an email notification when a report is ready. Default to false. */
            sendNotification?: boolean;
            /** List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification. */
            shareEmailAddress?: string[];
            /** Query title. It is used to name the reports generated from this query. */
            title?: string;
        }
        interface QuerySchedule {
            /** Datetime to periodically run the query until. */
            endTimeMs?: string;
            /** How often the query is run. */
            frequency?: string;
            /** Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. */
            nextRunMinuteOfDay?: number;
            /** Canonical timezone code for report generation time. Defaults to America/New_York. */
            nextRunTimezoneCode?: string;
        }
        interface Report {
            /** Key used to identify a report. */
            key?: ReportKey;
            /** Report metadata. */
            metadata?: ReportMetadata;
            /** Report parameters. */
            params?: Parameters;
        }
        interface ReportFailure {
            /** Error code that shows why the report was not created. */
            errorCode?: string;
        }
        interface ReportKey {
            /** Query ID. */
            queryId?: string;
            /** Report ID. */
            reportId?: string;
        }
        interface ReportMetadata {
            /** The path to the location in Google Cloud Storage where the report is stored. */
            googleCloudStoragePath?: string;
            /** The ending time for the data that is shown in the report. */
            reportDataEndTimeMs?: string;
            /** The starting time for the data that is shown in the report. */
            reportDataStartTimeMs?: string;
            /** Report status. */
            status?: ReportStatus;
        }
        interface ReportStatus {
            /** If the report failed, this records the cause. */
            failure?: ReportFailure;
            /** The time when this report either completed successfully or failed. */
            finishTimeMs?: string;
            /** The file type of the report. */
            format?: string;
            /** The state of the report. */
            state?: string;
        }
        interface RowStatus {
            /** Whether the stored entity is changed as a result of upload. */
            changed?: boolean;
            /** Entity Id. */
            entityId?: string;
            /** Entity name. */
            entityName?: string;
            /** Reasons why the entity can't be uploaded. */
            errors?: string[];
            /** Whether the entity is persisted. */
            persisted?: boolean;
            /** Row number. */
            rowNumber?: number;
        }
        interface RunQueryRequest {
            /** Report data range used to generate the report. */
            dataRange?: string;
            /** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataEndTimeMs?: string;
            /** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataStartTimeMs?: string;
            /** Canonical timezone code for report data time. Defaults to America/New_York. */
            timezoneCode?: string;
        }
        interface UploadLineItemsRequest {
            /** Set to true to get upload status without actually persisting the line items. */
            dryRun?: boolean;
            /** Format the line items are in. Default to CSV. */
            format?: string;
            /** Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format. */
            lineItems?: string;
        }
        interface UploadLineItemsResponse {
            /** Status of upload. */
            uploadStatus?: UploadStatus;
        }
        interface UploadStatus {
            /** Reasons why upload can't be completed. */
            errors?: string[];
            /** Per-row upload status. */
            rowStatus?: RowStatus[];
        }
        interface LineitemsResource {
            /** Retrieves line items in CSV format. */
            downloadlineitems(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<DownloadLineItemsResponse>;
            /** Uploads line items in CSV format. */
            uploadlineitems(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<UploadLineItemsResponse>;
        }
        interface QueriesResource {
            /** Creates a query. */
            createquery(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Query>;
            /** Deletes a stored query as well as the associated stored reports. */
            deletequery(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query ID to delete. */
                queryId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<void>;
            /** Retrieves a stored query. */
            getquery(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query ID to retrieve. */
                queryId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<Query>;
            /** Retrieves stored queries. */
            listqueries(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<ListQueriesResponse>;
            /** Runs a stored query to generate a report. */
            runquery(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query ID to run. */
                queryId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<void>;
        }
        interface ReportsResource {
            /** Retrieves stored reports. */
            listreports(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query ID with which the reports are associated. */
                queryId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<ListReportsResponse>;
        }
        interface SdfResource {
            /** Retrieves entities in SDF format. */
            download(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<DownloadResponse>;
        }
    }
}
