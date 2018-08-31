export declare class BaseErrorDetails {
    [key: string]: any;
    constructor(data?: {});
}
/**
 * An enhanced error instance for the TS Framework.
 * <br />
 * Basic features:
 * - Unique stack id using UUID v4
 * - Serializers: toObject and toJSON
 * - Better stack trace mapping
 */
export default class BaseError extends Error {
    stackId: string;
    details: BaseErrorDetails;
    /**
     * @param message The error message
     * @param details An option details object for error specific information
     */
    constructor(message: any, details?: any);
    /**
     * Generates POJO for this error instance.
     */
    toObject(): {
        message: string;
        stackId: string;
        details: BaseErrorDetails;
        stack: any;
    };
    /**
     * Generates JSON for this error instance.
     *
     * @param stringify Flag to enable stringification
     */
    toJSON(stringify?: boolean): any;
}
