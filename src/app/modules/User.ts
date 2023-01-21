export class address {
  address: string
  city: string
  postalCode: string
  state: string

  constructor(address: string, city: string, postalCode: string, state: string) {
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
    this.state = state;
  }
}

export class User{
  private static counter: number = 100
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
  password: string
  maidenName: string
  age: number
  phone: string
  birthDate: string
  bloodGroup: string
  height: number
  weight: number
  domain: string
  ip: string
  address: address
  university: string
  ein: string
  ssn: string

  constructor(username: string, email: string, firstName: string, lastName: string, gender: string, image: string, token: string, password: string, maidenName: string, age: number, phone: string, birthDate: string, bloodGroup: string, height: number, weight: number, domain: string, ip: string, address: address, university: string, ein: string, ssn: string) {
    User.counter++
    this.id = User.counter;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.image = image;
    this.token = token;
    this.password = password;
    this.maidenName = maidenName;
    this.age = age;
    this.phone = phone;
    this.birthDate = birthDate;
    this.bloodGroup = bloodGroup;
    this.height = height;
    this.weight = weight;
    this.domain = domain;
    this.ip = ip;
    this.address = address;
    this.university = university;
    this.ein = ein;
    this.ssn = ssn;
  }
}
