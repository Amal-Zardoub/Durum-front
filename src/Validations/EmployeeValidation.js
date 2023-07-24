import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EmployeeSchema = yup.object().shape({
  Name: yup
    .string()
    .required("Veuillez saisir le nom ")
    .min(3, "Le nom est trop cout ")
    .max(10, "Le nom est trop long "),
  lastName: yup
    .string()
    .required("Veuillez saisir le prénom ")
    .min(3, "Le prénom est trop cout ")
    .max(10, "Le prénom est trop long "),
  Phone: yup
    .string()
    .required("Veuillez saisir le numéro de téléphone")
    .matches(phoneRegExp, "Numéro de téléphone non valide"),
  Adresse: yup
    .string()
    .required("Veuillez saisir l'adresse postale ")
    .min(3, "L'adresse doit contenir au moins 3 caractères"),
  CIN: yup
    .number()
    .required("Veuillez saisir le numéro de carte d'identité")
    .min(8, "CIN doit contenir exactement 8 chiffres ")
    .max(8, "CIN doit contenir exactement 8 chiffres "),
});

export const EmployeeInfos = yup.object().shape({
  HourPrice: yup
    .number()
    .typeError("Veuillez entrer un nombre valide")
    .positive("Le prix doit être supérieur à zéro")
    .test(
      "is-float",
      "Veuillez entrer un nombre décimal",
      (value) => !isNaN(value) && value.toString().indexOf(".") !== -1
    ),
  Advance: yup.number().positive("L'avance ne peut pas être négative"),
  Credit: yup.number().positive("Le crédit ne peut pas être négative"),
});
