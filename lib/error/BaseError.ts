import * as uuid from 'uuid';
import * as cleanStack from 'clean-stack';

export class BaseErrorDetails {
  [key: string]: any;

  constructor(data = {}) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }
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
  constructor(message, details: any = {}) {
    const stackId = uuid.v4();
    super(`${message} (stackId: ${stackId})`);
    this.stackId = stackId;
    this.name = this.constructor.name;
    this.details = details instanceof BaseErrorDetails ? details : new BaseErrorDetails(details);

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }

  /**
   * Generates POJO for this error instance.
   */
  public toObject() {
    return {
      message: this.message,
      stackId: this.stackId,
      details: this.details,
      stack: cleanStack(this.stack),
    };
  }

  /**
   * Generates JSON for this error instance.
   *
   * @param stringify Flag to enable stringification
   */
  public toJSON(stringify = false): any {
    const obj = this.toObject();
    if (stringify) {
      return JSON.stringify(obj);
    }
    return obj;
  }
}
