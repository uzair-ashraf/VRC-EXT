export interface VRCErrorMessage {
  error: {
    message: string;
    status_code: number;
  }
}

export class VRCError {
  status: number;
  message: VRCErrorMessage;
  constructor(status: number, message: VRCErrorMessage) {
    this.status = status;
    this.message = message
  }
}
