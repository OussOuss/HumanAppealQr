export class user {
  public firstName: string;
  public lastName: string;
  public adresse: string;
  public dateNaissance: string;
  public lieuNaissance: string;
  public genders: string;
  public typeIdentifiant: string;
  public identifiant: string;
  public telephone: string;
  public email: string;
  public checked : boolean;
  public lastDateChecked : string;


  constructor(firstName: string, lastName: string , adresse: string, dateNaissance : string , lieuNaissance : string , genders: string , typeIdentifiant : string , identifiant : string, telephone : string, email : string, checked : boolean, lastDateChecked : string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.adresse = adresse;
    this.dateNaissance = dateNaissance;
    this.lieuNaissance = lieuNaissance;
    this.genders = genders;
    this.typeIdentifiant = typeIdentifiant;
    this.identifiant = identifiant;
    this.telephone = telephone;
    this.email = email;
    this.checked = checked;
    this.lastDateChecked = lastDateChecked;
  }
}
