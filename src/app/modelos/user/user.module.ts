export class Geo {
  constructor(
      private lat : string,
      private lng : string
  ){}
}

export class Adress {
  constructor(
      private street : string,
      private suite : string,
      private city : string,
      private zipcode : string,
      private geo : Geo
  ){}
}

export class Company {
  constructor(
      private name : string,
      private catchPhrase : string,
      private bs : string
  ){}
}

export class User{
  constructor(
      private id : number,
      private name : string,
      private username : string,
      private email: string,
      private adress: Adress,    
      private phone : number,
      private website : string,
      private company : Company
  ){ }
}