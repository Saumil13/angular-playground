import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidator {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return { 'inValidProjectName': true };
    }
    return null;
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promiseTest = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test project') {
          return resolve({ 'asyncInvalidProjectName': true });
        } else {
          return resolve(null);
        }
      }, 1000);
    });
    return promiseTest;

  }
}
