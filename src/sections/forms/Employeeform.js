import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { EmployeeSchema } from "../../Validations/EmployeeValidation";
import { useTheme } from "styled-components";
import {
  TextInput,
  ContainedButton,
  Date,
  Selectfield,
} from "../../components";
import { StyledForm } from "./style";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import HomeIcon from "@mui/icons-material/Home";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
function EmployeeForm() {
  const theme = useTheme();
  const orange = theme.COLORS.orange;
  const lightest = theme.COLORS.lightest;
  const schema = EmployeeSchema;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      lastName: "",
      BirthDate: "",
      Gender: "Male",
      Phone: "",
      Adresse: "",
      CIN: null,
      StartWork: "",
    },

    resolver: yupResolver(schema),
  });
  const onSubmit = async (data, e) => {
    console.log(data);
  };
  return (
    <StyledForm color={orange} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="Name"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Nom"
            icon={<PersonOutlineIcon sx={{ color: lightest }} />}
            error={!!errors.Name}
            helperText={errors.Name ? errors.Name.message : ""}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Prénom"
            icon={<GroupAddIcon sx={{ color: lightest }} />}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
          />
        )}
      />

      <Date width="100%" label="Date de naissance" />
      <Selectfield label="Genre" values={["Femelle", "Male"]} />

      <Controller
        name="Phone"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Téléphone"
            icon={<PhoneEnabledIcon sx={{ color: lightest }} />}
            error={!!errors.Phone}
            helperText={errors.Phone ? errors.Phone.message : ""}
          />
        )}
      />

      <Controller
        name="Adresse"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Adresse"
            icon={<HomeIcon sx={{ color: lightest }} />}
            error={!!errors.Adresse}
            helperText={errors.Adresse ? errors.Adresse.message : ""}
          />
        )}
      />

      <Controller
        name="CIN"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="CIN"
            icon={<FingerprintIcon sx={{ color: lightest }} />}
            error={!!errors.CIN}
            helperText={errors.CIN ? errors.CIN.message : ""}
          />
        )}
      />

      <Date width="100%" label="Date début travail" />
      <Selectfield label="Groupe" values={["A", "B"]} />
      <ContainedButton
        text="Ajouter Employé"
        color={lightest}
        bgcolor={orange}
        width="100%"
        type="Submit"
      />
    </StyledForm>
  );
}

export default EmployeeForm;
