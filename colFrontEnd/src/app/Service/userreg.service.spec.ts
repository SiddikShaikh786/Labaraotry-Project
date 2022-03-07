import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserregService } from './userreg.service';

describe('ApiService', () => {
  let service: UserregService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserregService]
    });
    service = TestBed.inject(UserregService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('it should register user', () => {
    let user = {
      error: false,
      message: "Data posted sucessfully",
      data: {
        uname: "example",
        email: "example@gmail.com",
        password: "password123",
        role: "user",
        _id: "621a6f58ae913d9af5017f09"
      }
    }
    service.regData(user).subscribe(res => {
      expect(res).toEqual(user);
    })

    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4000/users/register`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(user);
  })


  it("it should login user", () => {
    let response = {
      error: false,
      message: "login Sucessfull",
      data: {
        email: "example@gmail.com",
        password: "password123"
      }
    }
    service.logData(response).subscribe(res => {
      expect(res).toEqual(response);
    })

    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `http://localhost:4000/users/login`,
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(response);
  })

  it("it should get all reports", () => {
    let response = [
      {
        "date": "2512012",
        "pname": "mythri",
        "email": "mythri@gmial.com",
        "sampleId": 112,
        "haemotology": { "name": "mythri", "totalCount": "34g/dt", "haemoglobin": "40/Cmm", "neutrophlips": "65%", "lymphocytes": "5%", "EsoinPhilies": "55%", "monocytes": "65%", "basophills": "65%", "RBC": "123ml/Cmm", "PCv": "65%" },
        "thyroid": { "TRI IODO Thyroian": "123g/dt", "Thyroxine": "123g/dt", "thyroid": "123g/dt" },
        "glucometry": { "Fastting Blood Sugar": "110g/dt", "post pandial Blod sugar": "5/Cmm", "HbA1c": "10dl/Cmm", "Calcium": "333g/dt" }
      }]

    service.fetchSample().subscribe((res) => {
      expect(res).toEqual(response)
    })

    let req = httpTestingController.expectOne({
      method: 'GET',
      url: `http://localhost:4000/users/getsample
      `,
    })
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    req.flush(response)
  })

});