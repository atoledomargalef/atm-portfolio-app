export class QuestionBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    placeholder: string;
    order: number;
    controlType: string;
    display:string;
    type: string;
    options: {key: string, value: string}[];
    minLength: number;
    maxLength: number;
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        placeholder?: string;
        order?: number;
        controlType?: string;
        type?: string;
        display?:string;
        options?: {key: string, value: string}[];
        minLength?: number;
        maxLength?: number;
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.placeholder = options.placeholder || '';
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.display = options.display || '';
      this.options = options.options || [];
      this.minLength = options.minLength === undefined ? 1 : options.minLength;
      this.maxLength = options.maxLength  === undefined ? 1 : options.maxLength;
    }
  }