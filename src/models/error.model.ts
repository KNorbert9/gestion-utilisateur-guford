
export class ErrorClassModel extends Error {
  reason: string;
  status: number;
  validations: {
    field: string;
    defaultMessage: string;
  }[];

  constructor(message: string, reason = '', validations = [{ field: '', defaultMessage: '' }], status = 400) {
    super(message); // Appelle le constructeur de `Error`
    this.name = "ErrorClassModel"; // Nom de l'erreur
    this.reason = reason;
    this.validations = validations;
    this.status = status;

    // Nécessaire pour que `instanceof` fonctionne
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
