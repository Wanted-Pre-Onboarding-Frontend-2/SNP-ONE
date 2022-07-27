import { Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

interface SelectProps {
  label: string;
  name: string;
  options: string[] | undefined;
  control: any;
  sx?: object;
  onBlur?: any;
  required?: boolean;
}

const FormSelect = ({
  label,
  name,
  options,
  control,
  sx,
  onBlur,
  required,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required,
      }}
      render={({ field, fieldState: { error } }) => (
        <Select {...field} onBlur={onBlur} sx={sx} error={error !== undefined}>
          {options?.map((option, index) => (
            <MenuItem key={option + index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default FormSelect;
