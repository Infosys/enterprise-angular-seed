import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  formData = {};

  formSchema = {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        maxLength: 100
      },
      lastName: {
        type: 'string',
        maxLength: 100
      },
      doj: {
        type: 'string',
        format: 'date'
      },
      hasLeft: {
        type: 'boolean'
      },
      lastWorkDay: {
        type: 'string',
        format: 'date'
      },
      title: {
        type: 'string',
        maxLength: 150
      },
      emailId: {
        type: 'string',
        maxLength: 250,
        pattern: 'email'
      },
      cellphone: {
        type: 'string',
        maxLength: 15
      },
      ssn: {
        type: 'number',
        maximum: 9
      },
      aadhaar: {
        type: 'number',
        maximum: 12
      },
      addresses: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            line1: {
              type: 'string',
              maxLength: 100
            },
            line2: {
              type: 'string',
              maxLength: 100
            },
            city: {
              type: 'string',
              maxLength: 100
            },
            pincode: {
              type: 'string',
              maxLength: 10
            },
            state: {
              type: 'string',
              maxLength: 100
            },
            country: {
              type: 'string',
              maxLength: 100
            }
          },
          required: ['line1', 'city', 'pincode', 'country']
        }
      },
      trainings: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              maxLength: 500
            },
            startDate: {
              type: 'string',
              format: 'date'
            },
            endDate: {
              type: 'string',
              format: 'date'
            },
            trainingMasterId: {
              type: 'integer'
            },
            grade: {
              type: 'string',
              minLength: 1,
              maxLength: 1,
              pattern: '[A-D]'
            },
            feedback: {
              type: 'integer',
              minimum: 0,
              maximum: 5
            }
          },
          required: ['title', 'startDate', 'trainingMasterId']
        }
      }
    },
    required: ['firstName', 'lastName', 'doj', 'title', 'emailId'],
    title: 'Employee'
  };
  constructor() {}

  ngOnInit() {}
  formSubmitFn($event) {
    console.log('form Submitted', $event, this.formData);
  }
}
