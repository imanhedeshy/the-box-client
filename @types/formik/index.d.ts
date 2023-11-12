declare module 'formik' {
    import { FormikProps } from 'formik';
  
    export interface FormikBag<Values = any> {
      formik: FormikProps<Values>;
    }
  
    export function withFormik<Props, Values = any>(
      options: FormikConfig<Props, Values>
    ): (component: React.ComponentType<Props & FormikBag<Values>>) => React.ComponentType<Props>;
  
    // You can add other typings as needed
  }
  