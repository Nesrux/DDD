export type NotificationError = {
  message: string,
  context: string,
}

export default class Notification {
  private erros: NotificationError[] = [];

  addError(error: NotificationError) {
    this.erros.push(error);
  }

  messages(context?: string): string {
    let message = "";
    this.erros.forEach(error => {
      if (error.context === context || context === undefined) {
        message += `${error.context}: ${error.message},`;
      }
    });
    return message;
  }

  hasErrors(): boolean {
    return this.erros.length > 0
  }
}