import { Pipe, PipeTransform } from '@angular/core';

// Enum for metric units.
enum MetricToImperial {
  gm = 'ounce',
  ml = 'gallon',
}

/**
 * The pipe convert metric to imeperial
 * base unit set as metric.
 */
@Pipe({ name: 'unitConverter' })
export class UnitConverter implements PipeTransform {
  /**
   *  Function getImperialValue;
   *  the actual convertion logic, currently supports ounce and gallon.
   */
  getImperialValue = (value: number, newUnit: string): number => {
    let convertedValue = value;
    switch (newUnit) {
      case MetricToImperial.gm:
        convertedValue = value * 0.035274;
        break;

      case MetricToImperial.ml:
        convertedValue = value * 0.000219969;
        break;
    }

    return convertedValue;
  };
  transform(value: number, unit: string, changeToUnit: string): string {
    let newUnit: string = unit;
    let newValue: number = value;
    if (changeToUnit === 'imperial') {
      newUnit = MetricToImperial[unit];
      newValue = +this.getImperialValue(value, newUnit).toFixed(2);
    }
    return `${newValue}  ${newUnit}`;
  }
}
